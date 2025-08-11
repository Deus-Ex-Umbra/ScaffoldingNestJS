import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePosgradosContratoDto } from './dto/create-posgrados-contrato.dto';
import { UpdatePosgradosContratoDto } from './dto/update-posgrados-contrato.dto';
import { PosgradosContrato } from './entities/posgrados-contrato.entity';


@Injectable()
export class PosgradosContratoService {
  constructor(
    @InjectRepository(PosgradosContrato)
    private readonly posgradosContratoRepository: Repository<PosgradosContrato>,
  ) {}

  create(createPosgradosContratoDto: CreatePosgradosContratoDto) {
    const newRecord = this.posgradosContratoRepository.create(createPosgradosContratoDto);
    return this.posgradosContratoRepository.save(newRecord);
  }

  findAll() {
    return this.posgradosContratoRepository.find();
  }

  async findOne(idPosgradoContrato: number) {
    const record = await this.posgradosContratoRepository.findOneBy({ [ 'idPosgradoContrato' ]: idPosgradoContrato } as any);
    if (!record) {
      throw new NotFoundException(`PosgradosContrato con ID #${ idPosgradoContrato } no encontrado`);
    }
    return record;
  }


  async update(idPosgradoContrato: number, updatePosgradosContratoDto: UpdatePosgradosContratoDto) {
    const recordToUpdate = await this.findOne(idPosgradoContrato);
    if (!recordToUpdate) {
      throw new NotFoundException(`PosgradosContrato con ID #${ idPosgradoContrato } no encontrado`);
    }
    const updatedRecord = this.posgradosContratoRepository.merge(recordToUpdate, updatePosgradosContratoDto);
    return this.posgradosContratoRepository.save(updatedRecord);
  }

  async remove(idPosgradoContrato: number) {
    const record = await this.findOne(idPosgradoContrato);
    return this.posgradosContratoRepository.remove(record);
  }
}