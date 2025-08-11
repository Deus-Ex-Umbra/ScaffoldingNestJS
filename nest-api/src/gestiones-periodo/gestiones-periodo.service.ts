import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGestionesPeriodoDto } from './dto/create-gestiones-periodo.dto';
import { UpdateGestionesPeriodoDto } from './dto/update-gestiones-periodo.dto';
import { GestionesPeriodo } from './entities/gestiones-periodo.entity';


@Injectable()
export class GestionesPeriodoService {
  constructor(
    @InjectRepository(GestionesPeriodo)
    private readonly gestionesPeriodoRepository: Repository<GestionesPeriodo>,
  ) {}

  create(createGestionesPeriodoDto: CreateGestionesPeriodoDto) {
    const newRecord = this.gestionesPeriodoRepository.create(createGestionesPeriodoDto);
    return this.gestionesPeriodoRepository.save(newRecord);
  }

  findAll() {
    return this.gestionesPeriodoRepository.find();
  }

  async findOne(idGestionPeriodo: number) {
    const record = await this.gestionesPeriodoRepository.findOneBy({ [ 'idGestionPeriodo' ]: idGestionPeriodo } as any);
    if (!record) {
      throw new NotFoundException(`GestionesPeriodo con ID #${ idGestionPeriodo } no encontrado`);
    }
    return record;
  }


  async update(idGestionPeriodo: number, updateGestionesPeriodoDto: UpdateGestionesPeriodoDto) {
    const recordToUpdate = await this.findOne(idGestionPeriodo);
    if (!recordToUpdate) {
      throw new NotFoundException(`GestionesPeriodo con ID #${ idGestionPeriodo } no encontrado`);
    }
    const updatedRecord = this.gestionesPeriodoRepository.merge(recordToUpdate, updateGestionesPeriodoDto);
    return this.gestionesPeriodoRepository.save(updatedRecord);
  }

  async remove(idGestionPeriodo: number) {
    const record = await this.findOne(idGestionPeriodo);
    return this.gestionesPeriodoRepository.remove(record);
  }
}