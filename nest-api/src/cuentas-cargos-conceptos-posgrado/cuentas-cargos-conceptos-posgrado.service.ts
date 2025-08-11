import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCuentasCargosConceptosPosgradoDto } from './dto/create-cuentas-cargos-conceptos-posgrado.dto';
import { UpdateCuentasCargosConceptosPosgradoDto } from './dto/update-cuentas-cargos-conceptos-posgrado.dto';
import { CuentasCargosConceptosPosgrado } from './entities/cuentas-cargos-conceptos-posgrado.entity';


@Injectable()
export class CuentasCargosConceptosPosgradoService {
  constructor(
    @InjectRepository(CuentasCargosConceptosPosgrado)
    private readonly cuentasCargosConceptosPosgradoRepository: Repository<CuentasCargosConceptosPosgrado>,
  ) {}

  create(createCuentasCargosConceptosPosgradoDto: CreateCuentasCargosConceptosPosgradoDto) {
    const newRecord = this.cuentasCargosConceptosPosgradoRepository.create(createCuentasCargosConceptosPosgradoDto);
    return this.cuentasCargosConceptosPosgradoRepository.save(newRecord);
  }

  findAll() {
    return this.cuentasCargosConceptosPosgradoRepository.find();
  }

  async findOne(idCuentaCargoConceptoPosgrado: number) {
    const record = await this.cuentasCargosConceptosPosgradoRepository.findOneBy({ [ 'idCuentaCargoConceptoPosgrado' ]: idCuentaCargoConceptoPosgrado } as any);
    if (!record) {
      throw new NotFoundException(`CuentasCargosConceptosPosgrado con ID #${ idCuentaCargoConceptoPosgrado } no encontrado`);
    }
    return record;
  }


  async update(idCuentaCargoConceptoPosgrado: number, updateCuentasCargosConceptosPosgradoDto: UpdateCuentasCargosConceptosPosgradoDto) {
    const recordToUpdate = await this.findOne(idCuentaCargoConceptoPosgrado);
    if (!recordToUpdate) {
      throw new NotFoundException(`CuentasCargosConceptosPosgrado con ID #${ idCuentaCargoConceptoPosgrado } no encontrado`);
    }
    const updatedRecord = this.cuentasCargosConceptosPosgradoRepository.merge(recordToUpdate, updateCuentasCargosConceptosPosgradoDto);
    return this.cuentasCargosConceptosPosgradoRepository.save(updatedRecord);
  }

  async remove(idCuentaCargoConceptoPosgrado: number) {
    const record = await this.findOne(idCuentaCargoConceptoPosgrado);
    return this.cuentasCargosConceptosPosgradoRepository.remove(record);
  }
}