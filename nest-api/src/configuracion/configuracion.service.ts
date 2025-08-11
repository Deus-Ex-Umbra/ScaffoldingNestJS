import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateConfiguracionDto } from './dto/create-configuracion.dto';
import { UpdateConfiguracionDto } from './dto/update-configuracion.dto';
import { Configuracion } from './entities/configuracion.entity';


@Injectable()
export class ConfiguracionService {
  constructor(
    @InjectRepository(Configuracion)
    private readonly configuracionRepository: Repository<Configuracion>,
  ) {}

  create(createConfiguracionDto: CreateConfiguracionDto) {
    const newRecord = this.configuracionRepository.create(createConfiguracionDto);
    return this.configuracionRepository.save(newRecord);
  }

  findAll() {
    return this.configuracionRepository.find();
  }

  async findOne(idConfiguracion: number) {
    const record = await this.configuracionRepository.findOneBy({ [ 'idConfiguracion' ]: idConfiguracion } as any);
    if (!record) {
      throw new NotFoundException(`Configuracion con ID #${ idConfiguracion } no encontrado`);
    }
    return record;
  }


  async update(idConfiguracion: number, updateConfiguracionDto: UpdateConfiguracionDto) {
    const recordToUpdate = await this.findOne(idConfiguracion);
    if (!recordToUpdate) {
      throw new NotFoundException(`Configuracion con ID #${ idConfiguracion } no encontrado`);
    }
    const updatedRecord = this.configuracionRepository.merge(recordToUpdate, updateConfiguracionDto);
    return this.configuracionRepository.save(updatedRecord);
  }

  async remove(idConfiguracion: number) {
    const record = await this.findOne(idConfiguracion);
    return this.configuracionRepository.remove(record);
  }
}