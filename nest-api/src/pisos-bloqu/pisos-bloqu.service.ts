import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePisosBloquDto } from './dto/create-pisos-bloqu.dto';
import { UpdatePisosBloquDto } from './dto/update-pisos-bloqu.dto';
import { PisosBloqu } from './entities/pisos-bloqu.entity';


@Injectable()
export class PisosBloquService {
  constructor(
    @InjectRepository(PisosBloqu)
    private readonly pisosBloquRepository: Repository<PisosBloqu>,
  ) {}

  create(createPisosBloquDto: CreatePisosBloquDto) {
    const newRecord = this.pisosBloquRepository.create(createPisosBloquDto);
    return this.pisosBloquRepository.save(newRecord);
  }

  findAll() {
    return this.pisosBloquRepository.find();
  }

  async findOne(idPisoBloque: number) {
    const record = await this.pisosBloquRepository.findOneBy({ [ 'idPisoBloque' ]: idPisoBloque } as any);
    if (!record) {
      throw new NotFoundException(`PisosBloqu con ID #${ idPisoBloque } no encontrado`);
    }
    return record;
  }


  async update(idPisoBloque: number, updatePisosBloquDto: UpdatePisosBloquDto) {
    const recordToUpdate = await this.findOne(idPisoBloque);
    if (!recordToUpdate) {
      throw new NotFoundException(`PisosBloqu con ID #${ idPisoBloque } no encontrado`);
    }
    const updatedRecord = this.pisosBloquRepository.merge(recordToUpdate, updatePisosBloquDto);
    return this.pisosBloquRepository.save(updatedRecord);
  }

  async remove(idPisoBloque: number) {
    const record = await this.findOne(idPisoBloque);
    return this.pisosBloquRepository.remove(record);
  }
}