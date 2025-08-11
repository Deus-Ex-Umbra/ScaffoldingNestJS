import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePosgradoAsignacionesDocentDto } from './dto/create-posgrado-asignaciones-docent.dto';
import { UpdatePosgradoAsignacionesDocentDto } from './dto/update-posgrado-asignaciones-docent.dto';
import { PosgradoAsignacionesDocent } from './entities/posgrado-asignaciones-docent.entity';


@Injectable()
export class PosgradoAsignacionesDocentService {
  constructor(
    @InjectRepository(PosgradoAsignacionesDocent)
    private readonly posgradoAsignacionesDocentRepository: Repository<PosgradoAsignacionesDocent>,
  ) {}

  create(createPosgradoAsignacionesDocentDto: CreatePosgradoAsignacionesDocentDto) {
    const newRecord = this.posgradoAsignacionesDocentRepository.create(createPosgradoAsignacionesDocentDto);
    return this.posgradoAsignacionesDocentRepository.save(newRecord);
  }

  findAll() {
    return this.posgradoAsignacionesDocentRepository.find();
  }

  async findOne(idPosgradoAsignacionDocente: number) {
    const record = await this.posgradoAsignacionesDocentRepository.findOneBy({ [ 'idPosgradoAsignacionDocente' ]: idPosgradoAsignacionDocente } as any);
    if (!record) {
      throw new NotFoundException(`PosgradoAsignacionesDocent con ID #${ idPosgradoAsignacionDocente } no encontrado`);
    }
    return record;
  }


  async update(idPosgradoAsignacionDocente: number, updatePosgradoAsignacionesDocentDto: UpdatePosgradoAsignacionesDocentDto) {
    const recordToUpdate = await this.findOne(idPosgradoAsignacionDocente);
    if (!recordToUpdate) {
      throw new NotFoundException(`PosgradoAsignacionesDocent con ID #${ idPosgradoAsignacionDocente } no encontrado`);
    }
    const updatedRecord = this.posgradoAsignacionesDocentRepository.merge(recordToUpdate, updatePosgradoAsignacionesDocentDto);
    return this.posgradoAsignacionesDocentRepository.save(updatedRecord);
  }

  async remove(idPosgradoAsignacionDocente: number) {
    const record = await this.findOne(idPosgradoAsignacionDocente);
    return this.posgradoAsignacionesDocentRepository.remove(record);
  }
}