import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePosgradosProgramaDto } from './dto/create-posgrados-programa.dto';
import { UpdatePosgradosProgramaDto } from './dto/update-posgrados-programa.dto';
import { PosgradosPrograma } from './entities/posgrados-programa.entity';


@Injectable()
export class PosgradosProgramaService {
  constructor(
    @InjectRepository(PosgradosPrograma)
    private readonly posgradosProgramaRepository: Repository<PosgradosPrograma>,
  ) {}

  create(createPosgradosProgramaDto: CreatePosgradosProgramaDto) {
    const newRecord = this.posgradosProgramaRepository.create(createPosgradosProgramaDto);
    return this.posgradosProgramaRepository.save(newRecord);
  }

  findAll() {
    return this.posgradosProgramaRepository.find();
  }

  async findOne(idPosgradoPrograma: number) {
    const record = await this.posgradosProgramaRepository.findOneBy({ [ 'idPosgradoPrograma' ]: idPosgradoPrograma } as any);
    if (!record) {
      throw new NotFoundException(`PosgradosPrograma con ID #${ idPosgradoPrograma } no encontrado`);
    }
    return record;
  }


  async update(idPosgradoPrograma: number, updatePosgradosProgramaDto: UpdatePosgradosProgramaDto) {
    const recordToUpdate = await this.findOne(idPosgradoPrograma);
    if (!recordToUpdate) {
      throw new NotFoundException(`PosgradosPrograma con ID #${ idPosgradoPrograma } no encontrado`);
    }
    const updatedRecord = this.posgradosProgramaRepository.merge(recordToUpdate, updatePosgradosProgramaDto);
    return this.posgradosProgramaRepository.save(updatedRecord);
  }

  async remove(idPosgradoPrograma: number) {
    const record = await this.findOne(idPosgradoPrograma);
    return this.posgradosProgramaRepository.remove(record);
  }
}