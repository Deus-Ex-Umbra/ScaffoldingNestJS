import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTiposEvaluacionesNotaDto } from './dto/create-tipos-evaluaciones-nota.dto';
import { UpdateTiposEvaluacionesNotaDto } from './dto/update-tipos-evaluaciones-nota.dto';
import { TiposEvaluacionesNota } from './entities/tipos-evaluaciones-nota.entity';


@Injectable()
export class TiposEvaluacionesNotaService {
  constructor(
    @InjectRepository(TiposEvaluacionesNota)
    private readonly tiposEvaluacionesNotaRepository: Repository<TiposEvaluacionesNota>,
  ) {}

  create(createTiposEvaluacionesNotaDto: CreateTiposEvaluacionesNotaDto) {
    const newRecord = this.tiposEvaluacionesNotaRepository.create(createTiposEvaluacionesNotaDto);
    return this.tiposEvaluacionesNotaRepository.save(newRecord);
  }

  findAll() {
    return this.tiposEvaluacionesNotaRepository.find();
  }

  async findOne(idTipoEvaluacionNota: number) {
    const record = await this.tiposEvaluacionesNotaRepository.findOneBy({ [ 'idTipoEvaluacionNota' ]: idTipoEvaluacionNota } as any);
    if (!record) {
      throw new NotFoundException(`TiposEvaluacionesNota con ID #${ idTipoEvaluacionNota } no encontrado`);
    }
    return record;
  }


  async update(idTipoEvaluacionNota: number, updateTiposEvaluacionesNotaDto: UpdateTiposEvaluacionesNotaDto) {
    const recordToUpdate = await this.findOne(idTipoEvaluacionNota);
    if (!recordToUpdate) {
      throw new NotFoundException(`TiposEvaluacionesNota con ID #${ idTipoEvaluacionNota } no encontrado`);
    }
    const updatedRecord = this.tiposEvaluacionesNotaRepository.merge(recordToUpdate, updateTiposEvaluacionesNotaDto);
    return this.tiposEvaluacionesNotaRepository.save(updatedRecord);
  }

  async remove(idTipoEvaluacionNota: number) {
    const record = await this.findOne(idTipoEvaluacionNota);
    return this.tiposEvaluacionesNotaRepository.remove(record);
  }
}