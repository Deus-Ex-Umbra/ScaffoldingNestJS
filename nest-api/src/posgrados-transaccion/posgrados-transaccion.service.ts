import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePosgradosTransaccionDto } from './dto/create-posgrados-transaccion.dto';
import { UpdatePosgradosTransaccionDto } from './dto/update-posgrados-transaccion.dto';
import { PosgradosTransaccion } from './entities/posgrados-transaccion.entity';


@Injectable()
export class PosgradosTransaccionService {
  constructor(
    @InjectRepository(PosgradosTransaccion)
    private readonly posgradosTransaccionRepository: Repository<PosgradosTransaccion>,
  ) {}

  create(createPosgradosTransaccionDto: CreatePosgradosTransaccionDto) {
    const newRecord = this.posgradosTransaccionRepository.create(createPosgradosTransaccionDto);
    return this.posgradosTransaccionRepository.save(newRecord);
  }

  findAll() {
    return this.posgradosTransaccionRepository.find();
  }

  async findOne(idPosgradoTransaccion: number) {
    const record = await this.posgradosTransaccionRepository.findOneBy({ [ 'idPosgradoTransaccion' ]: idPosgradoTransaccion } as any);
    if (!record) {
      throw new NotFoundException(`PosgradosTransaccion con ID #${ idPosgradoTransaccion } no encontrado`);
    }
    return record;
  }


  async update(idPosgradoTransaccion: number, updatePosgradosTransaccionDto: UpdatePosgradosTransaccionDto) {
    const recordToUpdate = await this.findOne(idPosgradoTransaccion);
    if (!recordToUpdate) {
      throw new NotFoundException(`PosgradosTransaccion con ID #${ idPosgradoTransaccion } no encontrado`);
    }
    const updatedRecord = this.posgradosTransaccionRepository.merge(recordToUpdate, updatePosgradosTransaccionDto);
    return this.posgradosTransaccionRepository.save(updatedRecord);
  }

  async remove(idPosgradoTransaccion: number) {
    const record = await this.findOne(idPosgradoTransaccion);
    return this.posgradosTransaccionRepository.remove(record);
  }
}