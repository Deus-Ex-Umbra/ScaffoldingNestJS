import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePersonasDirectoresCarreraDto } from './dto/create-personas-directores-carrera.dto';
import { UpdatePersonasDirectoresCarreraDto } from './dto/update-personas-directores-carrera.dto';
import { PersonasDirectoresCarrera } from './entities/personas-directores-carrera.entity';


@Injectable()
export class PersonasDirectoresCarreraService {
  constructor(
    @InjectRepository(PersonasDirectoresCarrera)
    private readonly personasDirectoresCarreraRepository: Repository<PersonasDirectoresCarrera>,
  ) {}

  create(createPersonasDirectoresCarreraDto: CreatePersonasDirectoresCarreraDto) {
    const newRecord = this.personasDirectoresCarreraRepository.create(createPersonasDirectoresCarreraDto);
    return this.personasDirectoresCarreraRepository.save(newRecord);
  }

  findAll() {
    return this.personasDirectoresCarreraRepository.find();
  }

  async findOne(idPersonaDirectorCarrera: number) {
    const record = await this.personasDirectoresCarreraRepository.findOneBy({ [ 'idPersonaDirectorCarrera' ]: idPersonaDirectorCarrera } as any);
    if (!record) {
      throw new NotFoundException(`PersonasDirectoresCarrera con ID #${ idPersonaDirectorCarrera } no encontrado`);
    }
    return record;
  }


  async update(idPersonaDirectorCarrera: number, updatePersonasDirectoresCarreraDto: UpdatePersonasDirectoresCarreraDto) {
    const recordToUpdate = await this.findOne(idPersonaDirectorCarrera);
    if (!recordToUpdate) {
      throw new NotFoundException(`PersonasDirectoresCarrera con ID #${ idPersonaDirectorCarrera } no encontrado`);
    }
    const updatedRecord = this.personasDirectoresCarreraRepository.merge(recordToUpdate, updatePersonasDirectoresCarreraDto);
    return this.personasDirectoresCarreraRepository.save(updatedRecord);
  }

  async remove(idPersonaDirectorCarrera: number) {
    const record = await this.findOne(idPersonaDirectorCarrera);
    return this.personasDirectoresCarreraRepository.remove(record);
  }
}