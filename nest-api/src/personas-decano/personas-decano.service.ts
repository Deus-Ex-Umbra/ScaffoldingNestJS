import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePersonasDecanoDto } from './dto/create-personas-decano.dto';
import { UpdatePersonasDecanoDto } from './dto/update-personas-decano.dto';
import { PersonasDecano } from './entities/personas-decano.entity';


@Injectable()
export class PersonasDecanoService {
  constructor(
    @InjectRepository(PersonasDecano)
    private readonly personasDecanoRepository: Repository<PersonasDecano>,
  ) {}

  create(createPersonasDecanoDto: CreatePersonasDecanoDto) {
    const newRecord = this.personasDecanoRepository.create(createPersonasDecanoDto);
    return this.personasDecanoRepository.save(newRecord);
  }

  findAll() {
    return this.personasDecanoRepository.find();
  }

  async findOne(idPersonaDecano: number) {
    const record = await this.personasDecanoRepository.findOneBy({ [ 'idPersonaDecano' ]: idPersonaDecano } as any);
    if (!record) {
      throw new NotFoundException(`PersonasDecano con ID #${ idPersonaDecano } no encontrado`);
    }
    return record;
  }


  async update(idPersonaDecano: number, updatePersonasDecanoDto: UpdatePersonasDecanoDto) {
    const recordToUpdate = await this.findOne(idPersonaDecano);
    if (!recordToUpdate) {
      throw new NotFoundException(`PersonasDecano con ID #${ idPersonaDecano } no encontrado`);
    }
    const updatedRecord = this.personasDecanoRepository.merge(recordToUpdate, updatePersonasDecanoDto);
    return this.personasDecanoRepository.save(updatedRecord);
  }

  async remove(idPersonaDecano: number) {
    const record = await this.findOne(idPersonaDecano);
    return this.personasDecanoRepository.remove(record);
  }
}