import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePosgradosTransaccionesDetallesDesgloseDto } from './dto/create-posgrados-transacciones-detalles-desglose.dto';
import { UpdatePosgradosTransaccionesDetallesDesgloseDto } from './dto/update-posgrados-transacciones-detalles-desglose.dto';
import { PosgradosTransaccionesDetallesDesglose } from './entities/posgrados-transacciones-detalles-desglose.entity';


@Injectable()
export class PosgradosTransaccionesDetallesDesgloseService {
  constructor(
    @InjectRepository(PosgradosTransaccionesDetallesDesglose)
    private readonly posgradosTransaccionesDetallesDesgloseRepository: Repository<PosgradosTransaccionesDetallesDesglose>,
  ) {}

  create(createPosgradosTransaccionesDetallesDesgloseDto: CreatePosgradosTransaccionesDetallesDesgloseDto) {
    const newRecord = this.posgradosTransaccionesDetallesDesgloseRepository.create(createPosgradosTransaccionesDetallesDesgloseDto);
    return this.posgradosTransaccionesDetallesDesgloseRepository.save(newRecord);
  }

  findAll() {
    return this.posgradosTransaccionesDetallesDesgloseRepository.find();
  }

  async findOne(idTransaccionDesglose: number) {
    const record = await this.posgradosTransaccionesDetallesDesgloseRepository.findOneBy({ [ 'idTransaccionDesglose' ]: idTransaccionDesglose } as any);
    if (!record) {
      throw new NotFoundException(`PosgradosTransaccionesDetallesDesglose con ID #${ idTransaccionDesglose } no encontrado`);
    }
    return record;
  }


  async update(idTransaccionDesglose: number, updatePosgradosTransaccionesDetallesDesgloseDto: UpdatePosgradosTransaccionesDetallesDesgloseDto) {
    const recordToUpdate = await this.findOne(idTransaccionDesglose);
    if (!recordToUpdate) {
      throw new NotFoundException(`PosgradosTransaccionesDetallesDesglose con ID #${ idTransaccionDesglose } no encontrado`);
    }
    const updatedRecord = this.posgradosTransaccionesDetallesDesgloseRepository.merge(recordToUpdate, updatePosgradosTransaccionesDetallesDesgloseDto);
    return this.posgradosTransaccionesDetallesDesgloseRepository.save(updatedRecord);
  }

  async remove(idTransaccionDesglose: number) {
    const record = await this.findOne(idTransaccionDesglose);
    return this.posgradosTransaccionesDetallesDesgloseRepository.remove(record);
  }
}