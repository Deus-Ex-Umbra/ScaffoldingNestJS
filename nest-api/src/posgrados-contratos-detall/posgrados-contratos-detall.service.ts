import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePosgradosContratosDetallDto } from './dto/create-posgrados-contratos-detall.dto';
import { UpdatePosgradosContratosDetallDto } from './dto/update-posgrados-contratos-detall.dto';
import { PosgradosContratosDetall } from './entities/posgrados-contratos-detall.entity';


@Injectable()
export class PosgradosContratosDetallService {
  constructor(
    @InjectRepository(PosgradosContratosDetall)
    private readonly posgradosContratosDetallRepository: Repository<PosgradosContratosDetall>,
  ) {}

  create(createPosgradosContratosDetallDto: CreatePosgradosContratosDetallDto) {
    const newRecord = this.posgradosContratosDetallRepository.create(createPosgradosContratosDetallDto);
    return this.posgradosContratosDetallRepository.save(newRecord);
  }

  findAll() {
    return this.posgradosContratosDetallRepository.find();
  }

  async findOne(idPosgradoContratoDetalle: number) {
    const record = await this.posgradosContratosDetallRepository.findOneBy({ [ 'idPosgradoContratoDetalle' ]: idPosgradoContratoDetalle } as any);
    if (!record) {
      throw new NotFoundException(`PosgradosContratosDetall con ID #${ idPosgradoContratoDetalle } no encontrado`);
    }
    return record;
  }


  async update(idPosgradoContratoDetalle: number, updatePosgradosContratosDetallDto: UpdatePosgradosContratosDetallDto) {
    const recordToUpdate = await this.findOne(idPosgradoContratoDetalle);
    if (!recordToUpdate) {
      throw new NotFoundException(`PosgradosContratosDetall con ID #${ idPosgradoContratoDetalle } no encontrado`);
    }
    const updatedRecord = this.posgradosContratosDetallRepository.merge(recordToUpdate, updatePosgradosContratosDetallDto);
    return this.posgradosContratosDetallRepository.save(updatedRecord);
  }

  async remove(idPosgradoContratoDetalle: number) {
    const record = await this.findOne(idPosgradoContratoDetalle);
    return this.posgradosContratosDetallRepository.remove(record);
  }
}