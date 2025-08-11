import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDiaDto } from './dto/create-dia.dto';
import { UpdateDiaDto } from './dto/update-dia.dto';
import { Dia } from './entities/dia.entity';


@Injectable()
export class DiaService {
  constructor(
    @InjectRepository(Dia)
    private readonly diaRepository: Repository<Dia>,
  ) {}

  create(createDiaDto: CreateDiaDto) {
    const newRecord = this.diaRepository.create(createDiaDto);
    return this.diaRepository.save(newRecord);
  }

  findAll() {
    return this.diaRepository.find();
  }

  async findOne(idDia: number) {
    const record = await this.diaRepository.findOneBy({ [ 'idDia' ]: idDia } as any);
    if (!record) {
      throw new NotFoundException(`Dia con ID #${ idDia } no encontrado`);
    }
    return record;
  }


  async update(idDia: number, updateDiaDto: UpdateDiaDto) {
    const recordToUpdate = await this.findOne(idDia);
    if (!recordToUpdate) {
      throw new NotFoundException(`Dia con ID #${ idDia } no encontrado`);
    }
    const updatedRecord = this.diaRepository.merge(recordToUpdate, updateDiaDto);
    return this.diaRepository.save(updatedRecord);
  }

  async remove(idDia: number) {
    const record = await this.findOne(idDia);
    return this.diaRepository.remove(record);
  }
}