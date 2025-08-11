import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFacultadesEdificioDto } from './dto/create-facultades-edificio.dto';
import { UpdateFacultadesEdificioDto } from './dto/update-facultades-edificio.dto';
import { FacultadesEdificio } from './entities/facultades-edificio.entity';


@Injectable()
export class FacultadesEdificioService {
  constructor(
    @InjectRepository(FacultadesEdificio)
    private readonly facultadesEdificioRepository: Repository<FacultadesEdificio>,
  ) {}

  create(createFacultadesEdificioDto: CreateFacultadesEdificioDto) {
    const newRecord = this.facultadesEdificioRepository.create(createFacultadesEdificioDto);
    return this.facultadesEdificioRepository.save(newRecord);
  }

  findAll() {
    return this.facultadesEdificioRepository.find();
  }

  async findOne(idFacultadEdificio: number) {
    const record = await this.facultadesEdificioRepository.findOneBy({ [ 'idFacultadEdificio' ]: idFacultadEdificio } as any);
    if (!record) {
      throw new NotFoundException(`FacultadesEdificio con ID #${ idFacultadEdificio } no encontrado`);
    }
    return record;
  }


  async update(idFacultadEdificio: number, updateFacultadesEdificioDto: UpdateFacultadesEdificioDto) {
    const recordToUpdate = await this.findOne(idFacultadEdificio);
    if (!recordToUpdate) {
      throw new NotFoundException(`FacultadesEdificio con ID #${ idFacultadEdificio } no encontrado`);
    }
    const updatedRecord = this.facultadesEdificioRepository.merge(recordToUpdate, updateFacultadesEdificioDto);
    return this.facultadesEdificioRepository.save(updatedRecord);
  }

  async remove(idFacultadEdificio: number) {
    const record = await this.findOne(idFacultadEdificio);
    return this.facultadesEdificioRepository.remove(record);
  }
}