import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProvinciaDto } from './dto/create-provincia.dto';
import { UpdateProvinciaDto } from './dto/update-provincia.dto';
import { Provincia } from './entities/provincia.entity';


@Injectable()
export class ProvinciaService {
  constructor(
    @InjectRepository(Provincia)
    private readonly provinciaRepository: Repository<Provincia>,
  ) {}

  create(createProvinciaDto: CreateProvinciaDto) {
    const newRecord = this.provinciaRepository.create(createProvinciaDto);
    return this.provinciaRepository.save(newRecord);
  }

  findAll() {
    return this.provinciaRepository.find();
  }

  async findOne(idProvincia: number) {
    const record = await this.provinciaRepository.findOneBy({ [ 'idProvincia' ]: idProvincia } as any);
    if (!record) {
      throw new NotFoundException(`Provincia con ID #${ idProvincia } no encontrado`);
    }
    return record;
  }


  async update(idProvincia: number, updateProvinciaDto: UpdateProvinciaDto) {
    const recordToUpdate = await this.findOne(idProvincia);
    if (!recordToUpdate) {
      throw new NotFoundException(`Provincia con ID #${ idProvincia } no encontrado`);
    }
    const updatedRecord = this.provinciaRepository.merge(recordToUpdate, updateProvinciaDto);
    return this.provinciaRepository.save(updatedRecord);
  }

  async remove(idProvincia: number) {
    const record = await this.findOne(idProvincia);
    return this.provinciaRepository.remove(record);
  }
}