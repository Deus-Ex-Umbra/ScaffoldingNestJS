import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePersonasAlumnoDto } from './dto/create-personas-alumno.dto';
import { UpdatePersonasAlumnoDto } from './dto/update-personas-alumno.dto';
import { PersonasAlumno } from './entities/personas-alumno.entity';


@Injectable()
export class PersonasAlumnoService {
  constructor(
    @InjectRepository(PersonasAlumno)
    private readonly personasAlumnoRepository: Repository<PersonasAlumno>,
  ) {}

  create(createPersonasAlumnoDto: CreatePersonasAlumnoDto) {
    const newRecord = this.personasAlumnoRepository.create(createPersonasAlumnoDto);
    return this.personasAlumnoRepository.save(newRecord);
  }

  findAll() {
    return this.personasAlumnoRepository.find();
  }

  async findOne(idPersonaAlumno: number) {
    const record = await this.personasAlumnoRepository.findOneBy({ [ 'idPersonaAlumno' ]: idPersonaAlumno } as any);
    if (!record) {
      throw new NotFoundException(`PersonasAlumno con ID #${ idPersonaAlumno } no encontrado`);
    }
    return record;
  }


  async update(idPersonaAlumno: number, updatePersonasAlumnoDto: UpdatePersonasAlumnoDto) {
    const recordToUpdate = await this.findOne(idPersonaAlumno);
    if (!recordToUpdate) {
      throw new NotFoundException(`PersonasAlumno con ID #${ idPersonaAlumno } no encontrado`);
    }
    const updatedRecord = this.personasAlumnoRepository.merge(recordToUpdate, updatePersonasAlumnoDto);
    return this.personasAlumnoRepository.save(updatedRecord);
  }

  async remove(idPersonaAlumno: number) {
    const record = await this.findOne(idPersonaAlumno);
    return this.personasAlumnoRepository.remove(record);
  }
}