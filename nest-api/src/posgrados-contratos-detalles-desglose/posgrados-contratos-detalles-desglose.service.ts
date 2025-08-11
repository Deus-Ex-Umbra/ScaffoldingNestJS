import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePosgradosContratosDetallesDesgloseDto } from './dto/create-posgrados-contratos-detalles-desglose.dto';
import { UpdatePosgradosContratosDetallesDesgloseDto } from './dto/update-posgrados-contratos-detalles-desglose.dto';
import { PosgradosContratosDetallesDesglose } from './entities/posgrados-contratos-detalles-desglose.entity';


@Injectable()
export class PosgradosContratosDetallesDesgloseService {
  constructor(
    @InjectRepository(PosgradosContratosDetallesDesglose)
    private readonly posgradosContratosDetallesDesgloseRepository: Repository<PosgradosContratosDetallesDesglose>,
  ) {}

  create(createPosgradosContratosDetallesDesgloseDto: CreatePosgradosContratosDetallesDesgloseDto) {
    const newRecord = this.posgradosContratosDetallesDesgloseRepository.create(createPosgradosContratosDetallesDesgloseDto);
    return this.posgradosContratosDetallesDesgloseRepository.save(newRecord);
  }

  findAll() {
    return this.posgradosContratosDetallesDesgloseRepository.find();
  }

  async findOne(idPosgradoDesglose: number) {
    const record = await this.posgradosContratosDetallesDesgloseRepository.findOneBy({ [ 'idPosgradoDesglose' ]: idPosgradoDesglose } as any);
    if (!record) {
      throw new NotFoundException(`PosgradosContratosDetallesDesglose con ID #${ idPosgradoDesglose } no encontrado`);
    }
    return record;
  }


  async update(idPosgradoDesglose: number, updatePosgradosContratosDetallesDesgloseDto: UpdatePosgradosContratosDetallesDesgloseDto) {
    const recordToUpdate = await this.findOne(idPosgradoDesglose);
    if (!recordToUpdate) {
      throw new NotFoundException(`PosgradosContratosDetallesDesglose con ID #${ idPosgradoDesglose } no encontrado`);
    }
    const updatedRecord = this.posgradosContratosDetallesDesgloseRepository.merge(recordToUpdate, updatePosgradosContratosDetallesDesgloseDto);
    return this.posgradosContratosDetallesDesgloseRepository.save(updatedRecord);
  }

  async remove(idPosgradoDesglose: number) {
    const record = await this.findOne(idPosgradoDesglose);
    return this.posgradosContratosDetallesDesgloseRepository.remove(record);
  }
}