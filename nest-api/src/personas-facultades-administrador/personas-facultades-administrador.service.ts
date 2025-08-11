import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePersonasFacultadesAdministradorDto } from './dto/create-personas-facultades-administrador.dto';
import { UpdatePersonasFacultadesAdministradorDto } from './dto/update-personas-facultades-administrador.dto';
import { PersonasFacultadesAdministrador } from './entities/personas-facultades-administrador.entity';


@Injectable()
export class PersonasFacultadesAdministradorService {
  constructor(
    @InjectRepository(PersonasFacultadesAdministrador)
    private readonly personasFacultadesAdministradorRepository: Repository<PersonasFacultadesAdministrador>,
  ) {}

  create(createPersonasFacultadesAdministradorDto: CreatePersonasFacultadesAdministradorDto) {
    const newRecord = this.personasFacultadesAdministradorRepository.create(createPersonasFacultadesAdministradorDto);
    return this.personasFacultadesAdministradorRepository.save(newRecord);
  }

  findAll() {
    return this.personasFacultadesAdministradorRepository.find();
  }

  async findOne(idPersonaFacultadAdministrador: number) {
    const record = await this.personasFacultadesAdministradorRepository.findOneBy({ [ 'idPersonaFacultadAdministrador' ]: idPersonaFacultadAdministrador } as any);
    if (!record) {
      throw new NotFoundException(`PersonasFacultadesAdministrador con ID #${ idPersonaFacultadAdministrador } no encontrado`);
    }
    return record;
  }


  async update(idPersonaFacultadAdministrador: number, updatePersonasFacultadesAdministradorDto: UpdatePersonasFacultadesAdministradorDto) {
    const recordToUpdate = await this.findOne(idPersonaFacultadAdministrador);
    if (!recordToUpdate) {
      throw new NotFoundException(`PersonasFacultadesAdministrador con ID #${ idPersonaFacultadAdministrador } no encontrado`);
    }
    const updatedRecord = this.personasFacultadesAdministradorRepository.merge(recordToUpdate, updatePersonasFacultadesAdministradorDto);
    return this.personasFacultadesAdministradorRepository.save(updatedRecord);
  }

  async remove(idPersonaFacultadAdministrador: number) {
    const record = await this.findOne(idPersonaFacultadAdministrador);
    return this.personasFacultadesAdministradorRepository.remove(record);
  }
}