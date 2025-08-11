import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePosgradoTiposEvaluacionesNotaDto } from './dto/create-posgrado-tipos-evaluaciones-nota.dto';
import { UpdatePosgradoTiposEvaluacionesNotaDto } from './dto/update-posgrado-tipos-evaluaciones-nota.dto';
import { PosgradoTiposEvaluacionesNota } from './entities/posgrado-tipos-evaluaciones-nota.entity';


@Injectable()
export class PosgradoTiposEvaluacionesNotaService {
  constructor(
    @InjectRepository(PosgradoTiposEvaluacionesNota)
    private readonly posgradoTiposEvaluacionesNotaRepository: Repository<PosgradoTiposEvaluacionesNota>,
  ) {}

  create(createPosgradoTiposEvaluacionesNotaDto: CreatePosgradoTiposEvaluacionesNotaDto) {
    const newRecord = this.posgradoTiposEvaluacionesNotaRepository.create(createPosgradoTiposEvaluacionesNotaDto);
    return this.posgradoTiposEvaluacionesNotaRepository.save(newRecord);
  }

  findAll() {
    return this.posgradoTiposEvaluacionesNotaRepository.find();
  }

  async findOne(idPosgradoTipoEvaluacionNota: number) {
    const record = await this.posgradoTiposEvaluacionesNotaRepository.findOneBy({ [ 'idPosgradoTipoEvaluacionNota' ]: idPosgradoTipoEvaluacionNota } as any);
    if (!record) {
      throw new NotFoundException(`PosgradoTiposEvaluacionesNota con ID #${ idPosgradoTipoEvaluacionNota } no encontrado`);
    }
    return record;
  }


  async update(idPosgradoTipoEvaluacionNota: number, updatePosgradoTiposEvaluacionesNotaDto: UpdatePosgradoTiposEvaluacionesNotaDto) {
    const recordToUpdate = await this.findOne(idPosgradoTipoEvaluacionNota);
    if (!recordToUpdate) {
      throw new NotFoundException(`PosgradoTiposEvaluacionesNota con ID #${ idPosgradoTipoEvaluacionNota } no encontrado`);
    }
    const updatedRecord = this.posgradoTiposEvaluacionesNotaRepository.merge(recordToUpdate, updatePosgradoTiposEvaluacionesNotaDto);
    return this.posgradoTiposEvaluacionesNotaRepository.save(updatedRecord);
  }

  async remove(idPosgradoTipoEvaluacionNota: number) {
    const record = await this.findOne(idPosgradoTipoEvaluacionNota);
    return this.posgradoTiposEvaluacionesNotaRepository.remove(record);
  }
}