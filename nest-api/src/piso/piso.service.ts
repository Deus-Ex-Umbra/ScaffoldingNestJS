import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePisoDto } from './dto/create-piso.dto';
import { UpdatePisoDto } from './dto/update-piso.dto';
import { Piso } from './entities/piso.entity';


@Injectable()
export class PisoService {
  constructor(
    @InjectRepository(Piso)
    private readonly pisoRepository: Repository<Piso>,
  ) {}

  create(createPisoDto: CreatePisoDto) {
    const newRecord = this.pisoRepository.create(createPisoDto);
    return this.pisoRepository.save(newRecord);
  }

  findAll() {
    return this.pisoRepository.find();
  }

  async findOne(idPiso: number) {
    const record = await this.pisoRepository.findOneBy({ [ 'idPiso' ]: idPiso } as any);
    if (!record) {
      throw new NotFoundException(`Piso con ID #${ idPiso } no encontrado`);
    }
    return record;
  }


  async update(idPiso: number, updatePisoDto: UpdatePisoDto) {
    const recordToUpdate = await this.findOne(idPiso);
    if (!recordToUpdate) {
      throw new NotFoundException(`Piso con ID #${ idPiso } no encontrado`);
    }
    const updatedRecord = this.pisoRepository.merge(recordToUpdate, updatePisoDto);
    return this.pisoRepository.save(updatedRecord);
  }

  async remove(idPiso: number) {
    const record = await this.findOne(idPiso);
    return this.pisoRepository.remove(record);
  }
}