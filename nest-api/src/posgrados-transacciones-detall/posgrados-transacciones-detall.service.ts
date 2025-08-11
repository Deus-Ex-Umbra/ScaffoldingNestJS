import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePosgradosTransaccionesDetallDto } from './dto/create-posgrados-transacciones-detall.dto';
import { UpdatePosgradosTransaccionesDetallDto } from './dto/update-posgrados-transacciones-detall.dto';
import { PosgradosTransaccionesDetall } from './entities/posgrados-transacciones-detall.entity';


@Injectable()
export class PosgradosTransaccionesDetallService {
  constructor(
    @InjectRepository(PosgradosTransaccionesDetall)
    private readonly posgradosTransaccionesDetallRepository: Repository<PosgradosTransaccionesDetall>,
  ) {}

  create(createPosgradosTransaccionesDetallDto: CreatePosgradosTransaccionesDetallDto) {
    const newRecord = this.posgradosTransaccionesDetallRepository.create(createPosgradosTransaccionesDetallDto);
    return this.posgradosTransaccionesDetallRepository.save(newRecord);
  }

  findAll() {
    return this.posgradosTransaccionesDetallRepository.find();
  }

  async findOne(idPosgradoTransaccionDetalle: number) {
    const record = await this.posgradosTransaccionesDetallRepository.findOneBy({ [ 'idPosgradoTransaccionDetalle' ]: idPosgradoTransaccionDetalle } as any);
    if (!record) {
      throw new NotFoundException(`PosgradosTransaccionesDetall con ID #${ idPosgradoTransaccionDetalle } no encontrado`);
    }
    return record;
  }


  async update(idPosgradoTransaccionDetalle: number, updatePosgradosTransaccionesDetallDto: UpdatePosgradosTransaccionesDetallDto) {
    const recordToUpdate = await this.findOne(idPosgradoTransaccionDetalle);
    if (!recordToUpdate) {
      throw new NotFoundException(`PosgradosTransaccionesDetall con ID #${ idPosgradoTransaccionDetalle } no encontrado`);
    }
    const updatedRecord = this.posgradosTransaccionesDetallRepository.merge(recordToUpdate, updatePosgradosTransaccionesDetallDto);
    return this.posgradosTransaccionesDetallRepository.save(updatedRecord);
  }

  async remove(idPosgradoTransaccionDetalle: number) {
    const record = await this.findOne(idPosgradoTransaccionDetalle);
    return this.posgradosTransaccionesDetallRepository.remove(record);
  }
}