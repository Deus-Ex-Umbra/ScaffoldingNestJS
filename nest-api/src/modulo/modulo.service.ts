import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateModuloDto } from './dto/create-modulo.dto';
import { UpdateModuloDto } from './dto/update-modulo.dto';
import { Modulo } from './entities/modulo.entity';


@Injectable()
export class ModuloService {
  constructor(
    @InjectRepository(Modulo)
    private readonly moduloRepository: Repository<Modulo>,
  ) {}

  create(createModuloDto: CreateModuloDto) {
    const newRecord = this.moduloRepository.create(createModuloDto);
    return this.moduloRepository.save(newRecord);
  }

  findAll() {
    return this.moduloRepository.find();
  }

  async findOne(idModulo: number) {
    const record = await this.moduloRepository.findOneBy({ [ 'idModulo' ]: idModulo } as any);
    if (!record) {
      throw new NotFoundException(`Modulo con ID #${ idModulo } no encontrado`);
    }
    return record;
  }


  async update(idModulo: number, updateModuloDto: UpdateModuloDto) {
    const recordToUpdate = await this.findOne(idModulo);
    if (!recordToUpdate) {
      throw new NotFoundException(`Modulo con ID #${ idModulo } no encontrado`);
    }
    const updatedRecord = this.moduloRepository.merge(recordToUpdate, updateModuloDto);
    return this.moduloRepository.save(updatedRecord);
  }

  async remove(idModulo: number) {
    const record = await this.findOne(idModulo);
    return this.moduloRepository.remove(record);
  }
}