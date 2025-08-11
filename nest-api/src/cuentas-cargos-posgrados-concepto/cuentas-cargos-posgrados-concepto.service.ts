import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCuentasCargosPosgradosConceptoDto } from './dto/create-cuentas-cargos-posgrados-concepto.dto';
import { UpdateCuentasCargosPosgradosConceptoDto } from './dto/update-cuentas-cargos-posgrados-concepto.dto';
import { CuentasCargosPosgradosConcepto } from './entities/cuentas-cargos-posgrados-concepto.entity';


@Injectable()
export class CuentasCargosPosgradosConceptoService {
  constructor(
    @InjectRepository(CuentasCargosPosgradosConcepto)
    private readonly cuentasCargosPosgradosConceptoRepository: Repository<CuentasCargosPosgradosConcepto>,
  ) {}

  create(createCuentasCargosPosgradosConceptoDto: CreateCuentasCargosPosgradosConceptoDto) {
    const newRecord = this.cuentasCargosPosgradosConceptoRepository.create(createCuentasCargosPosgradosConceptoDto);
    return this.cuentasCargosPosgradosConceptoRepository.save(newRecord);
  }

  findAll() {
    return this.cuentasCargosPosgradosConceptoRepository.find();
  }

  async findOne(idCuentaCargoPosgradoConcepto: number) {
    const record = await this.cuentasCargosPosgradosConceptoRepository.findOneBy({ [ 'idCuentaCargoPosgradoConcepto' ]: idCuentaCargoPosgradoConcepto } as any);
    if (!record) {
      throw new NotFoundException(`CuentasCargosPosgradosConcepto con ID #${ idCuentaCargoPosgradoConcepto } no encontrado`);
    }
    return record;
  }


  async update(idCuentaCargoPosgradoConcepto: number, updateCuentasCargosPosgradosConceptoDto: UpdateCuentasCargosPosgradosConceptoDto) {
    const recordToUpdate = await this.findOne(idCuentaCargoPosgradoConcepto);
    if (!recordToUpdate) {
      throw new NotFoundException(`CuentasCargosPosgradosConcepto con ID #${ idCuentaCargoPosgradoConcepto } no encontrado`);
    }
    const updatedRecord = this.cuentasCargosPosgradosConceptoRepository.merge(recordToUpdate, updateCuentasCargosPosgradosConceptoDto);
    return this.cuentasCargosPosgradosConceptoRepository.save(updatedRecord);
  }

  async remove(idCuentaCargoPosgradoConcepto: number) {
    const record = await this.findOne(idCuentaCargoPosgradoConcepto);
    return this.cuentasCargosPosgradosConceptoRepository.remove(record);
  }
}