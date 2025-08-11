import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePersonasRolDto } from './dto/create-personas-rol.dto';
import { UpdatePersonasRolDto } from './dto/update-personas-rol.dto';
import { PersonasRol } from './entities/personas-rol.entity';


@Injectable()
export class PersonasRolService {
  constructor(
    @InjectRepository(PersonasRol)
    private readonly personasRolRepository: Repository<PersonasRol>,
  ) {}

  create(createPersonasRolDto: CreatePersonasRolDto) {
    const newRecord = this.personasRolRepository.create(createPersonasRolDto);
    return this.personasRolRepository.save(newRecord);
  }

  findAll() {
    return this.personasRolRepository.find();
  }

  async findOne(idPersonaRol: number) {
    const record = await this.personasRolRepository.findOneBy({ [ 'idPersonaRol' ]: idPersonaRol } as any);
    if (!record) {
      throw new NotFoundException(`PersonasRol con ID #${ idPersonaRol } no encontrado`);
    }
    return record;
  }


  async update(idPersonaRol: number, updatePersonasRolDto: UpdatePersonasRolDto) {
    const recordToUpdate = await this.findOne(idPersonaRol);
    if (!recordToUpdate) {
      throw new NotFoundException(`PersonasRol con ID #${ idPersonaRol } no encontrado`);
    }
    const updatedRecord = this.personasRolRepository.merge(recordToUpdate, updatePersonasRolDto);
    return this.personasRolRepository.save(updatedRecord);
  }

  async remove(idPersonaRol: number) {
    const record = await this.findOne(idPersonaRol);
    return this.personasRolRepository.remove(record);
  }
}