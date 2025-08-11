import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateModalidadDto } from './dto/create-modalidad.dto';
import { UpdateModalidadDto } from './dto/update-modalidad.dto';
import { Modalidad } from './entities/modalidad.entity';


@Injectable()
export class ModalidadService {
  constructor(
    @InjectRepository(Modalidad)
    private readonly modalidadRepository: Repository<Modalidad>,
  ) {}

  create(createModalidadDto: CreateModalidadDto) {
    const newRecord = this.modalidadRepository.create(createModalidadDto);
    return this.modalidadRepository.save(newRecord);
  }

  findAll() {
    return this.modalidadRepository.find();
  }

  async findOne(idModalidad: number) {
    const record = await this.modalidadRepository.findOneBy({ [ 'idModalidad' ]: idModalidad } as any);
    if (!record) {
      throw new NotFoundException(`Modalidad con ID #${ idModalidad } no encontrado`);
    }
    return record;
  }


  async update(idModalidad: number, updateModalidadDto: UpdateModalidadDto) {
    const recordToUpdate = await this.findOne(idModalidad);
    if (!recordToUpdate) {
      throw new NotFoundException(`Modalidad con ID #${ idModalidad } no encontrado`);
    }
    const updatedRecord = this.modalidadRepository.merge(recordToUpdate, updateModalidadDto);
    return this.modalidadRepository.save(updatedRecord);
  }

  async remove(idModalidad: number) {
    const record = await this.findOne(idModalidad);
    return this.modalidadRepository.remove(record);
  }
}