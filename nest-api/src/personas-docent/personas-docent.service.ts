import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePersonasDocentDto } from './dto/create-personas-docent.dto';
import { UpdatePersonasDocentDto } from './dto/update-personas-docent.dto';
import { PersonasDocent } from './entities/personas-docent.entity';


@Injectable()
export class PersonasDocentService {
  constructor(
    @InjectRepository(PersonasDocent)
    private readonly personasDocentRepository: Repository<PersonasDocent>,
  ) {}

  create(createPersonasDocentDto: CreatePersonasDocentDto) {
    const newRecord = this.personasDocentRepository.create(createPersonasDocentDto);
    return this.personasDocentRepository.save(newRecord);
  }

  findAll() {
    return this.personasDocentRepository.find();
  }

  async findOne(idPersonaDocente: number) {
    const record = await this.personasDocentRepository.findOneBy({ [ 'idPersonaDocente' ]: idPersonaDocente } as any);
    if (!record) {
      throw new NotFoundException(`PersonasDocent con ID #${ idPersonaDocente } no encontrado`);
    }
    return record;
  }


  async update(idPersonaDocente: number, updatePersonasDocentDto: UpdatePersonasDocentDto) {
    const recordToUpdate = await this.findOne(idPersonaDocente);
    if (!recordToUpdate) {
      throw new NotFoundException(`PersonasDocent con ID #${ idPersonaDocente } no encontrado`);
    }
    const updatedRecord = this.personasDocentRepository.merge(recordToUpdate, updatePersonasDocentDto);
    return this.personasDocentRepository.save(updatedRecord);
  }

  async remove(idPersonaDocente: number) {
    const record = await this.findOne(idPersonaDocente);
    return this.personasDocentRepository.remove(record);
  }
}