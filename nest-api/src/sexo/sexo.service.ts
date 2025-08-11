import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSexoDto } from './dto/create-sexo.dto';
import { UpdateSexoDto } from './dto/update-sexo.dto';
import { Sexo } from './entities/sexo.entity';


@Injectable()
export class SexoService {
  constructor(
    @InjectRepository(Sexo)
    private readonly sexoRepository: Repository<Sexo>,
  ) {}

  create(createSexoDto: CreateSexoDto) {
    const newRecord = this.sexoRepository.create(createSexoDto);
    return this.sexoRepository.save(newRecord);
  }

  findAll() {
    return this.sexoRepository.find();
  }

  async findOne(idSexo: number) {
    const record = await this.sexoRepository.findOneBy({ [ 'idSexo' ]: idSexo } as any);
    if (!record) {
      throw new NotFoundException(`Sexo con ID #${ idSexo } no encontrado`);
    }
    return record;
  }


  async update(idSexo: number, updateSexoDto: UpdateSexoDto) {
    const recordToUpdate = await this.findOne(idSexo);
    if (!recordToUpdate) {
      throw new NotFoundException(`Sexo con ID #${ idSexo } no encontrado`);
    }
    const updatedRecord = this.sexoRepository.merge(recordToUpdate, updateSexoDto);
    return this.sexoRepository.save(updatedRecord);
  }

  async remove(idSexo: number) {
    const record = await this.findOne(idSexo);
    return this.sexoRepository.remove(record);
  }
}