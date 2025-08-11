import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePersonasDirectoresPosgradoDto } from './dto/create-personas-directores-posgrado.dto';
import { UpdatePersonasDirectoresPosgradoDto } from './dto/update-personas-directores-posgrado.dto';
import { PersonasDirectoresPosgrado } from './entities/personas-directores-posgrado.entity';


@Injectable()
export class PersonasDirectoresPosgradoService {
  constructor(
    @InjectRepository(PersonasDirectoresPosgrado)
    private readonly personasDirectoresPosgradoRepository: Repository<PersonasDirectoresPosgrado>,
  ) {}

  create(createPersonasDirectoresPosgradoDto: CreatePersonasDirectoresPosgradoDto) {
    const newRecord = this.personasDirectoresPosgradoRepository.create(createPersonasDirectoresPosgradoDto);
    return this.personasDirectoresPosgradoRepository.save(newRecord);
  }

  findAll() {
    return this.personasDirectoresPosgradoRepository.find();
  }

  async findOne(idPersonaDirectorPosgrado: number) {
    const record = await this.personasDirectoresPosgradoRepository.findOneBy({ [ 'idPersonaDirectorPosgrado' ]: idPersonaDirectorPosgrado } as any);
    if (!record) {
      throw new NotFoundException(`PersonasDirectoresPosgrado con ID #${ idPersonaDirectorPosgrado } no encontrado`);
    }
    return record;
  }


  async update(idPersonaDirectorPosgrado: number, updatePersonasDirectoresPosgradoDto: UpdatePersonasDirectoresPosgradoDto) {
    const recordToUpdate = await this.findOne(idPersonaDirectorPosgrado);
    if (!recordToUpdate) {
      throw new NotFoundException(`PersonasDirectoresPosgrado con ID #${ idPersonaDirectorPosgrado } no encontrado`);
    }
    const updatedRecord = this.personasDirectoresPosgradoRepository.merge(recordToUpdate, updatePersonasDirectoresPosgradoDto);
    return this.personasDirectoresPosgradoRepository.save(updatedRecord);
  }

  async remove(idPersonaDirectorPosgrado: number) {
    const record = await this.findOne(idPersonaDirectorPosgrado);
    return this.personasDirectoresPosgradoRepository.remove(record);
  }
}