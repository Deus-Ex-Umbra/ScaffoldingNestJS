import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePosgradoAsignacionesHorarioDto } from './dto/create-posgrado-asignaciones-horario.dto';
import { UpdatePosgradoAsignacionesHorarioDto } from './dto/update-posgrado-asignaciones-horario.dto';
import { PosgradoAsignacionesHorario } from './entities/posgrado-asignaciones-horario.entity';


@Injectable()
export class PosgradoAsignacionesHorarioService {
  constructor(
    @InjectRepository(PosgradoAsignacionesHorario)
    private readonly posgradoAsignacionesHorarioRepository: Repository<PosgradoAsignacionesHorario>,
  ) {}

  create(createPosgradoAsignacionesHorarioDto: CreatePosgradoAsignacionesHorarioDto) {
    const newRecord = this.posgradoAsignacionesHorarioRepository.create(createPosgradoAsignacionesHorarioDto);
    return this.posgradoAsignacionesHorarioRepository.save(newRecord);
  }

  findAll() {
    return this.posgradoAsignacionesHorarioRepository.find();
  }

  async findOne(idPosgradoAsignacionHorario: number) {
    const record = await this.posgradoAsignacionesHorarioRepository.findOneBy({ [ 'idPosgradoAsignacionHorario' ]: idPosgradoAsignacionHorario } as any);
    if (!record) {
      throw new NotFoundException(`PosgradoAsignacionesHorario con ID #${ idPosgradoAsignacionHorario } no encontrado`);
    }
    return record;
  }


  async update(idPosgradoAsignacionHorario: number, updatePosgradoAsignacionesHorarioDto: UpdatePosgradoAsignacionesHorarioDto) {
    const recordToUpdate = await this.findOne(idPosgradoAsignacionHorario);
    if (!recordToUpdate) {
      throw new NotFoundException(`PosgradoAsignacionesHorario con ID #${ idPosgradoAsignacionHorario } no encontrado`);
    }
    const updatedRecord = this.posgradoAsignacionesHorarioRepository.merge(recordToUpdate, updatePosgradoAsignacionesHorarioDto);
    return this.posgradoAsignacionesHorarioRepository.save(updatedRecord);
  }

  async remove(idPosgradoAsignacionHorario: number) {
    const record = await this.findOne(idPosgradoAsignacionHorario);
    return this.posgradoAsignacionesHorarioRepository.remove(record);
  }
}