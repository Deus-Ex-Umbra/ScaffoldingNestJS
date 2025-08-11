import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEstadosCivilDto } from './dto/create-estados-civil.dto';
import { UpdateEstadosCivilDto } from './dto/update-estados-civil.dto';
import { EstadosCivil } from './entities/estados-civil.entity';


@Injectable()
export class EstadosCivilService {
  constructor(
    @InjectRepository(EstadosCivil)
    private readonly estadosCivilRepository: Repository<EstadosCivil>,
  ) {}

  create(createEstadosCivilDto: CreateEstadosCivilDto) {
    const newRecord = this.estadosCivilRepository.create(createEstadosCivilDto);
    return this.estadosCivilRepository.save(newRecord);
  }

  findAll() {
    return this.estadosCivilRepository.find();
  }

  async findOne(idEstadoCivil: number) {
    const record = await this.estadosCivilRepository.findOneBy({ [ 'idEstadoCivil' ]: idEstadoCivil } as any);
    if (!record) {
      throw new NotFoundException(`EstadosCivil con ID #${ idEstadoCivil } no encontrado`);
    }
    return record;
  }


  async update(idEstadoCivil: number, updateEstadosCivilDto: UpdateEstadosCivilDto) {
    const recordToUpdate = await this.findOne(idEstadoCivil);
    if (!recordToUpdate) {
      throw new NotFoundException(`EstadosCivil con ID #${ idEstadoCivil } no encontrado`);
    }
    const updatedRecord = this.estadosCivilRepository.merge(recordToUpdate, updateEstadosCivilDto);
    return this.estadosCivilRepository.save(updatedRecord);
  }

  async remove(idEstadoCivil: number) {
    const record = await this.findOne(idEstadoCivil);
    return this.estadosCivilRepository.remove(record);
  }
}