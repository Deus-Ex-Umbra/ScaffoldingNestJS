import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCarreraDto } from './dto/create-carrera.dto';
import { UpdateCarreraDto } from './dto/update-carrera.dto';
import { Carrera } from './entities/carrera.entity';


@Injectable()
export class CarreraService {
  constructor(
    @InjectRepository(Carrera)
    private readonly carreraRepository: Repository<Carrera>,
  ) {}

  create(createCarreraDto: CreateCarreraDto) {
    const newRecord = this.carreraRepository.create(createCarreraDto);
    return this.carreraRepository.save(newRecord);
  }

  findAll() {
    return this.carreraRepository.find();
  }

  async findOne(idCarrera: number) {
    const record = await this.carreraRepository.findOneBy({ [ 'idCarrera' ]: idCarrera } as any);
    if (!record) {
      throw new NotFoundException(`Carrera con ID #${ idCarrera } no encontrado`);
    }
    return record;
  }


  async update(idCarrera: number, updateCarreraDto: UpdateCarreraDto) {
    const recordToUpdate = await this.findOne(idCarrera);
    if (!recordToUpdate) {
      throw new NotFoundException(`Carrera con ID #${ idCarrera } no encontrado`);
    }
    const updatedRecord = this.carreraRepository.merge(recordToUpdate, updateCarreraDto);
    return this.carreraRepository.save(updatedRecord);
  }

  async remove(idCarrera: number) {
    const record = await this.findOne(idCarrera);
    return this.carreraRepository.remove(record);
  }
}