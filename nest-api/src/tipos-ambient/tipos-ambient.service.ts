import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTiposAmbientDto } from './dto/create-tipos-ambient.dto';
import { UpdateTiposAmbientDto } from './dto/update-tipos-ambient.dto';
import { TiposAmbient } from './entities/tipos-ambient.entity';


@Injectable()
export class TiposAmbientService {
  constructor(
    @InjectRepository(TiposAmbient)
    private readonly tiposAmbientRepository: Repository<TiposAmbient>,
  ) {}

  create(createTiposAmbientDto: CreateTiposAmbientDto) {
    const newRecord = this.tiposAmbientRepository.create(createTiposAmbientDto);
    return this.tiposAmbientRepository.save(newRecord);
  }

  findAll() {
    return this.tiposAmbientRepository.find();
  }

  async findOne(idTipoAmbiente: number) {
    const record = await this.tiposAmbientRepository.findOneBy({ [ 'idTipoAmbiente' ]: idTipoAmbiente } as any);
    if (!record) {
      throw new NotFoundException(`TiposAmbient con ID #${ idTipoAmbiente } no encontrado`);
    }
    return record;
  }


  async update(idTipoAmbiente: number, updateTiposAmbientDto: UpdateTiposAmbientDto) {
    const recordToUpdate = await this.findOne(idTipoAmbiente);
    if (!recordToUpdate) {
      throw new NotFoundException(`TiposAmbient con ID #${ idTipoAmbiente } no encontrado`);
    }
    const updatedRecord = this.tiposAmbientRepository.merge(recordToUpdate, updateTiposAmbientDto);
    return this.tiposAmbientRepository.save(updatedRecord);
  }

  async remove(idTipoAmbiente: number) {
    const record = await this.findOne(idTipoAmbiente);
    return this.tiposAmbientRepository.remove(record);
  }
}