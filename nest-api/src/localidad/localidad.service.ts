import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLocalidadDto } from './dto/create-localidad.dto';
import { UpdateLocalidadDto } from './dto/update-localidad.dto';
import { Localidad } from './entities/localidad.entity';


@Injectable()
export class LocalidadService {
  constructor(
    @InjectRepository(Localidad)
    private readonly localidadRepository: Repository<Localidad>,
  ) {}

  create(createLocalidadDto: CreateLocalidadDto) {
    const newRecord = this.localidadRepository.create(createLocalidadDto);
    return this.localidadRepository.save(newRecord);
  }

  findAll() {
    return this.localidadRepository.find();
  }

  async findOne(idLocalidad: number) {
    const record = await this.localidadRepository.findOneBy({ [ 'idLocalidad' ]: idLocalidad } as any);
    if (!record) {
      throw new NotFoundException(`Localidad con ID #${ idLocalidad } no encontrado`);
    }
    return record;
  }


  async update(idLocalidad: number, updateLocalidadDto: UpdateLocalidadDto) {
    const recordToUpdate = await this.findOne(idLocalidad);
    if (!recordToUpdate) {
      throw new NotFoundException(`Localidad con ID #${ idLocalidad } no encontrado`);
    }
    const updatedRecord = this.localidadRepository.merge(recordToUpdate, updateLocalidadDto);
    return this.localidadRepository.save(updatedRecord);
  }

  async remove(idLocalidad: number) {
    const record = await this.findOne(idLocalidad);
    return this.localidadRepository.remove(record);
  }
}