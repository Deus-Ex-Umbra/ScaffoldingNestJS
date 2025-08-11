import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCuentasConceptoDto } from './dto/create-cuentas-concepto.dto';
import { UpdateCuentasConceptoDto } from './dto/update-cuentas-concepto.dto';
import { CuentasConcepto } from './entities/cuentas-concepto.entity';


@Injectable()
export class CuentasConceptoService {
  constructor(
    @InjectRepository(CuentasConcepto)
    private readonly cuentasConceptoRepository: Repository<CuentasConcepto>,
  ) {}

  create(createCuentasConceptoDto: CreateCuentasConceptoDto) {
    const newRecord = this.cuentasConceptoRepository.create(createCuentasConceptoDto);
    return this.cuentasConceptoRepository.save(newRecord);
  }

  findAll() {
    return this.cuentasConceptoRepository.find();
  }

  async findOne(idCuentaConcepto: number) {
    const record = await this.cuentasConceptoRepository.findOneBy({ [ 'idCuentaConcepto' ]: idCuentaConcepto } as any);
    if (!record) {
      throw new NotFoundException(`CuentasConcepto con ID #${ idCuentaConcepto } no encontrado`);
    }
    return record;
  }


  async update(idCuentaConcepto: number, updateCuentasConceptoDto: UpdateCuentasConceptoDto) {
    const recordToUpdate = await this.findOne(idCuentaConcepto);
    if (!recordToUpdate) {
      throw new NotFoundException(`CuentasConcepto con ID #${ idCuentaConcepto } no encontrado`);
    }
    const updatedRecord = this.cuentasConceptoRepository.merge(recordToUpdate, updateCuentasConceptoDto);
    return this.cuentasConceptoRepository.save(updatedRecord);
  }

  async remove(idCuentaConcepto: number) {
    const record = await this.findOne(idCuentaConcepto);
    return this.cuentasConceptoRepository.remove(record);
  }
}