import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePersonasAdministrativoDto } from './dto/create-personas-administrativo.dto';
import { UpdatePersonasAdministrativoDto } from './dto/update-personas-administrativo.dto';
import { PersonasAdministrativo } from './entities/personas-administrativo.entity';


@Injectable()
export class PersonasAdministrativoService {
  constructor(
    @InjectRepository(PersonasAdministrativo)
    private readonly personasAdministrativoRepository: Repository<PersonasAdministrativo>,
  ) {}

  create(createPersonasAdministrativoDto: CreatePersonasAdministrativoDto) {
    const newRecord = this.personasAdministrativoRepository.create(createPersonasAdministrativoDto);
    return this.personasAdministrativoRepository.save(newRecord);
  }

  findAll() {
    return this.personasAdministrativoRepository.find();
  }

  async findOne(idPersonaAdministrativo: number) {
    const record = await this.personasAdministrativoRepository.findOneBy({ [ 'idPersonaAdministrativo' ]: idPersonaAdministrativo } as any);
    if (!record) {
      throw new NotFoundException(`PersonasAdministrativo con ID #${ idPersonaAdministrativo } no encontrado`);
    }
    return record;
  }


  async update(idPersonaAdministrativo: number, updatePersonasAdministrativoDto: UpdatePersonasAdministrativoDto) {
    const recordToUpdate = await this.findOne(idPersonaAdministrativo);
    if (!recordToUpdate) {
      throw new NotFoundException(`PersonasAdministrativo con ID #${ idPersonaAdministrativo } no encontrado`);
    }
    const updatedRecord = this.personasAdministrativoRepository.merge(recordToUpdate, updatePersonasAdministrativoDto);
    return this.personasAdministrativoRepository.save(updatedRecord);
  }

  async remove(idPersonaAdministrativo: number) {
    const record = await this.findOne(idPersonaAdministrativo);
    return this.personasAdministrativoRepository.remove(record);
  }
}