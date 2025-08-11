import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePaisDto } from './dto/create-pais.dto';
import { UpdatePaisDto } from './dto/update-pais.dto';
import { Pais } from './entities/pais.entity';


@Injectable()
export class PaisService {
  constructor(
    @InjectRepository(Pais)
    private readonly paisRepository: Repository<Pais>,
  ) {}

  create(createPaisDto: CreatePaisDto) {
    const newRecord = this.paisRepository.create(createPaisDto);
    return this.paisRepository.save(newRecord);
  }

  findAll() {
    return this.paisRepository.find();
  }

  async findOne(idPais: number) {
    const record = await this.paisRepository.findOneBy({ [ 'idPais' ]: idPais } as any);
    if (!record) {
      throw new NotFoundException(`Pais con ID #${ idPais } no encontrado`);
    }
    return record;
  }


  async update(idPais: number, updatePaisDto: UpdatePaisDto) {
    const recordToUpdate = await this.findOne(idPais);
    if (!recordToUpdate) {
      throw new NotFoundException(`Pais con ID #${ idPais } no encontrado`);
    }
    const updatedRecord = this.paisRepository.merge(recordToUpdate, updatePaisDto);
    return this.paisRepository.save(updatedRecord);
  }

  async remove(idPais: number) {
    const record = await this.findOne(idPais);
    return this.paisRepository.remove(record);
  }
}