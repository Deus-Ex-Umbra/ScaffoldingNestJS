import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCuentasCargosPosgradoDto } from './dto/create-cuentas-cargos-posgrado.dto';
import { UpdateCuentasCargosPosgradoDto } from './dto/update-cuentas-cargos-posgrado.dto';
import { CuentasCargosPosgrado } from './entities/cuentas-cargos-posgrado.entity';


@Injectable()
export class CuentasCargosPosgradoService {
  constructor(
    @InjectRepository(CuentasCargosPosgrado)
    private readonly cuentasCargosPosgradoRepository: Repository<CuentasCargosPosgrado>,
  ) {}

  create(createCuentasCargosPosgradoDto: CreateCuentasCargosPosgradoDto) {
    const newRecord = this.cuentasCargosPosgradoRepository.create(createCuentasCargosPosgradoDto);
    return this.cuentasCargosPosgradoRepository.save(newRecord);
  }

  findAll() {
    return this.cuentasCargosPosgradoRepository.find();
  }

  async findOne(idCuentaCargoPosgrado: number) {
    const record = await this.cuentasCargosPosgradoRepository.findOneBy({ [ 'idCuentaCargoPosgrado' ]: idCuentaCargoPosgrado } as any);
    if (!record) {
      throw new NotFoundException(`CuentasCargosPosgrado con ID #${ idCuentaCargoPosgrado } no encontrado`);
    }
    return record;
  }


  async update(idCuentaCargoPosgrado: number, updateCuentasCargosPosgradoDto: UpdateCuentasCargosPosgradoDto) {
    const recordToUpdate = await this.findOne(idCuentaCargoPosgrado);
    if (!recordToUpdate) {
      throw new NotFoundException(`CuentasCargosPosgrado con ID #${ idCuentaCargoPosgrado } no encontrado`);
    }
    const updatedRecord = this.cuentasCargosPosgradoRepository.merge(recordToUpdate, updateCuentasCargosPosgradoDto);
    return this.cuentasCargosPosgradoRepository.save(updatedRecord);
  }

  async remove(idCuentaCargoPosgrado: number) {
    const record = await this.findOne(idCuentaCargoPosgrado);
    return this.cuentasCargosPosgradoRepository.remove(record);
  }
}