import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDepartamentoDto } from './dto/create-departamento.dto';
import { UpdateDepartamentoDto } from './dto/update-departamento.dto';
import { Departamento } from './entities/departamento.entity';


@Injectable()
export class DepartamentoService {
  constructor(
    @InjectRepository(Departamento)
    private readonly departamentoRepository: Repository<Departamento>,
  ) {}

  create(createDepartamentoDto: CreateDepartamentoDto) {
    const newRecord = this.departamentoRepository.create(createDepartamentoDto);
    return this.departamentoRepository.save(newRecord);
  }

  findAll() {
    return this.departamentoRepository.find();
  }

  async findOne(idDepartamento: number) {
    const record = await this.departamentoRepository.findOneBy({ [ 'idDepartamento' ]: idDepartamento } as any);
    if (!record) {
      throw new NotFoundException(`Departamento con ID #${ idDepartamento } no encontrado`);
    }
    return record;
  }


  async update(idDepartamento: number, updateDepartamentoDto: UpdateDepartamentoDto) {
    const recordToUpdate = await this.findOne(idDepartamento);
    if (!recordToUpdate) {
      throw new NotFoundException(`Departamento con ID #${ idDepartamento } no encontrado`);
    }
    const updatedRecord = this.departamentoRepository.merge(recordToUpdate, updateDepartamentoDto);
    return this.departamentoRepository.save(updatedRecord);
  }

  async remove(idDepartamento: number) {
    const record = await this.findOne(idDepartamento);
    return this.departamentoRepository.remove(record);
  }
}