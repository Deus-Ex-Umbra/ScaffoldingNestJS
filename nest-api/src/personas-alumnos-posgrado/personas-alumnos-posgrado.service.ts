import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePersonasAlumnosPosgradoDto } from './dto/create-personas-alumnos-posgrado.dto';
import { UpdatePersonasAlumnosPosgradoDto } from './dto/update-personas-alumnos-posgrado.dto';
import { PersonasAlumnosPosgrado } from './entities/personas-alumnos-posgrado.entity';


@Injectable()
export class PersonasAlumnosPosgradoService {
  constructor(
    @InjectRepository(PersonasAlumnosPosgrado)
    private readonly personasAlumnosPosgradoRepository: Repository<PersonasAlumnosPosgrado>,
  ) {}

  create(createPersonasAlumnosPosgradoDto: CreatePersonasAlumnosPosgradoDto) {
    const newRecord = this.personasAlumnosPosgradoRepository.create(createPersonasAlumnosPosgradoDto);
    return this.personasAlumnosPosgradoRepository.save(newRecord);
  }

  findAll() {
    return this.personasAlumnosPosgradoRepository.find();
  }

  async findOne(idPersonaAlumnoPosgrado: number) {
    const record = await this.personasAlumnosPosgradoRepository.findOneBy({ [ 'idPersonaAlumnoPosgrado' ]: idPersonaAlumnoPosgrado } as any);
    if (!record) {
      throw new NotFoundException(`PersonasAlumnosPosgrado con ID #${ idPersonaAlumnoPosgrado } no encontrado`);
    }
    return record;
  }


  async update(idPersonaAlumnoPosgrado: number, updatePersonasAlumnosPosgradoDto: UpdatePersonasAlumnosPosgradoDto) {
    const recordToUpdate = await this.findOne(idPersonaAlumnoPosgrado);
    if (!recordToUpdate) {
      throw new NotFoundException(`PersonasAlumnosPosgrado con ID #${ idPersonaAlumnoPosgrado } no encontrado`);
    }
    const updatedRecord = this.personasAlumnosPosgradoRepository.merge(recordToUpdate, updatePersonasAlumnosPosgradoDto);
    return this.personasAlumnosPosgradoRepository.save(updatedRecord);
  }

  async remove(idPersonaAlumnoPosgrado: number) {
    const record = await this.findOne(idPersonaAlumnoPosgrado);
    return this.personasAlumnosPosgradoRepository.remove(record);
  }
}