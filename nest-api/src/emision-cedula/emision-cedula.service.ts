import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmisionCedulaDto } from './dto/create-emision-cedula.dto';
import { UpdateEmisionCedulaDto } from './dto/update-emision-cedula.dto';
import { EmisionCedula } from './entities/emision-cedula.entity';


@Injectable()
export class EmisionCedulaService {
  constructor(
    @InjectRepository(EmisionCedula)
    private readonly emisionCedulaRepository: Repository<EmisionCedula>,
  ) {}

  create(createEmisionCedulaDto: CreateEmisionCedulaDto) {
    const newRecord = this.emisionCedulaRepository.create(createEmisionCedulaDto);
    return this.emisionCedulaRepository.save(newRecord);
  }

  findAll() {
    return this.emisionCedulaRepository.find();
  }

  async findOne(idEmisionCedula: number) {
    const record = await this.emisionCedulaRepository.findOneBy({ [ 'idEmisionCedula' ]: idEmisionCedula } as any);
    if (!record) {
      throw new NotFoundException(`EmisionCedula con ID #${ idEmisionCedula } no encontrado`);
    }
    return record;
  }


  async update(idEmisionCedula: number, updateEmisionCedulaDto: UpdateEmisionCedulaDto) {
    const recordToUpdate = await this.findOne(idEmisionCedula);
    if (!recordToUpdate) {
      throw new NotFoundException(`EmisionCedula con ID #${ idEmisionCedula } no encontrado`);
    }
    const updatedRecord = this.emisionCedulaRepository.merge(recordToUpdate, updateEmisionCedulaDto);
    return this.emisionCedulaRepository.save(updatedRecord);
  }

  async remove(idEmisionCedula: number) {
    const record = await this.findOne(idEmisionCedula);
    return this.emisionCedulaRepository.remove(record);
  }
}