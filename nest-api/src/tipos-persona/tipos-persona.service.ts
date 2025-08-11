import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTiposPersonaDto } from './dto/create-tipos-persona.dto';
import { UpdateTiposPersonaDto } from './dto/update-tipos-persona.dto';
import { TiposPersona } from './entities/tipos-persona.entity';


@Injectable()
export class TiposPersonaService {
  constructor(
    @InjectRepository(TiposPersona)
    private readonly tiposPersonaRepository: Repository<TiposPersona>,
  ) {}

  create(createTiposPersonaDto: CreateTiposPersonaDto) {
    const newRecord = this.tiposPersonaRepository.create(createTiposPersonaDto);
    return this.tiposPersonaRepository.save(newRecord);
  }

  findAll() {
    return this.tiposPersonaRepository.find();
  }

  async findOne(idTipoPersona: number) {
    const record = await this.tiposPersonaRepository.findOneBy({ [ 'idTipoPersona' ]: idTipoPersona } as any);
    if (!record) {
      throw new NotFoundException(`TiposPersona con ID #${ idTipoPersona } no encontrado`);
    }
    return record;
  }


  async update(idTipoPersona: number, updateTiposPersonaDto: UpdateTiposPersonaDto) {
    const recordToUpdate = await this.findOne(idTipoPersona);
    if (!recordToUpdate) {
      throw new NotFoundException(`TiposPersona con ID #${ idTipoPersona } no encontrado`);
    }
    const updatedRecord = this.tiposPersonaRepository.merge(recordToUpdate, updateTiposPersonaDto);
    return this.tiposPersonaRepository.save(updatedRecord);
  }

  async remove(idTipoPersona: number) {
    const record = await this.findOne(idTipoPersona);
    return this.tiposPersonaRepository.remove(record);
  }
}