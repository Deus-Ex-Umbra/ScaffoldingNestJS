import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEdificioDto } from './dto/create-edificio.dto';
import { UpdateEdificioDto } from './dto/update-edificio.dto';
import { Edificio } from './entities/edificio.entity';


@Injectable()
export class EdificioService {
  constructor(
    @InjectRepository(Edificio)
    private readonly edificioRepository: Repository<Edificio>,
  ) {}

  create(createEdificioDto: CreateEdificioDto) {
    const newRecord = this.edificioRepository.create(createEdificioDto);
    return this.edificioRepository.save(newRecord);
  }

  findAll() {
    return this.edificioRepository.find();
  }

  async findOne(idEdificio: number) {
    const record = await this.edificioRepository.findOneBy({ [ 'idEdificio' ]: idEdificio } as any);
    if (!record) {
      throw new NotFoundException(`Edificio con ID #${ idEdificio } no encontrado`);
    }
    return record;
  }


  async update(idEdificio: number, updateEdificioDto: UpdateEdificioDto) {
    const recordToUpdate = await this.findOne(idEdificio);
    if (!recordToUpdate) {
      throw new NotFoundException(`Edificio con ID #${ idEdificio } no encontrado`);
    }
    const updatedRecord = this.edificioRepository.merge(recordToUpdate, updateEdificioDto);
    return this.edificioRepository.save(updatedRecord);
  }

  async remove(idEdificio: number) {
    const record = await this.findOne(idEdificio);
    return this.edificioRepository.remove(record);
  }
}