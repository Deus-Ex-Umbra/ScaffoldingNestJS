import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { Persona } from './entities/persona.entity';


@Injectable()
export class PersonaService {
  constructor(
    @InjectRepository(Persona)
    private readonly personaRepository: Repository<Persona>,
  ) {}

  create(createPersonaDto: CreatePersonaDto) {
    const newRecord = this.personaRepository.create(createPersonaDto);
    return this.personaRepository.save(newRecord);
  }

  findAll() {
    return this.personaRepository.find();
  }

  async findOne(idPersona: number) {
    const record = await this.personaRepository.findOneBy({ [ 'idPersona' ]: idPersona } as any);
    if (!record) {
      throw new NotFoundException(`Persona con ID #${ idPersona } no encontrado`);
    }
    return record;
  }


  async update(idPersona: number, updatePersonaDto: UpdatePersonaDto) {
    const recordToUpdate = await this.findOne(idPersona);
    if (!recordToUpdate) {
      throw new NotFoundException(`Persona con ID #${ idPersona } no encontrado`);
    }
    const updatedRecord = this.personaRepository.merge(recordToUpdate, updatePersonaDto);
    return this.personaRepository.save(updatedRecord);
  }

  async remove(idPersona: number) {
    const record = await this.findOne(idPersona);
    return this.personaRepository.remove(record);
  }
}