import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePosgradoCalificacionDto } from './dto/create-posgrado-calificacion.dto';
import { UpdatePosgradoCalificacionDto } from './dto/update-posgrado-calificacion.dto';
import { PosgradoCalificacion } from './entities/posgrado-calificacion.entity';


@Injectable()
export class PosgradoCalificacionService {
  constructor(
    @InjectRepository(PosgradoCalificacion)
    private readonly posgradoCalificacionRepository: Repository<PosgradoCalificacion>,
  ) {}

  create(createPosgradoCalificacionDto: CreatePosgradoCalificacionDto) {
    const newRecord = this.posgradoCalificacionRepository.create(createPosgradoCalificacionDto);
    return this.posgradoCalificacionRepository.save(newRecord);
  }

  findAll() {
    return this.posgradoCalificacionRepository.find();
  }

  async findOne(idPostgradoCalificacion: number) {
    const record = await this.posgradoCalificacionRepository.findOneBy({ [ 'idPostgradoCalificacion' ]: idPostgradoCalificacion } as any);
    if (!record) {
      throw new NotFoundException(`PosgradoCalificacion con ID #${ idPostgradoCalificacion } no encontrado`);
    }
    return record;
  }


  async update(idPostgradoCalificacion: number, updatePosgradoCalificacionDto: UpdatePosgradoCalificacionDto) {
    const recordToUpdate = await this.findOne(idPostgradoCalificacion);
    if (!recordToUpdate) {
      throw new NotFoundException(`PosgradoCalificacion con ID #${ idPostgradoCalificacion } no encontrado`);
    }
    const updatedRecord = this.posgradoCalificacionRepository.merge(recordToUpdate, updatePosgradoCalificacionDto);
    return this.posgradoCalificacionRepository.save(updatedRecord);
  }

  async remove(idPostgradoCalificacion: number) {
    const record = await this.findOne(idPostgradoCalificacion);
    return this.posgradoCalificacionRepository.remove(record);
  }
}