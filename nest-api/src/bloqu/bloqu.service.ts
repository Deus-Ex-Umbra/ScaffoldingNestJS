import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBloquDto } from './dto/create-bloqu.dto';
import { UpdateBloquDto } from './dto/update-bloqu.dto';
import { Bloqu } from './entities/bloqu.entity';


@Injectable()
export class BloquService {
  constructor(
    @InjectRepository(Bloqu)
    private readonly bloquRepository: Repository<Bloqu>,
  ) {}

  create(createBloquDto: CreateBloquDto) {
    const newRecord = this.bloquRepository.create(createBloquDto);
    return this.bloquRepository.save(newRecord);
  }

  findAll() {
    return this.bloquRepository.find();
  }

  async findOne(idBloque: number) {
    const record = await this.bloquRepository.findOneBy({ [ 'idBloque' ]: idBloque } as any);
    if (!record) {
      throw new NotFoundException(`Bloqu con ID #${ idBloque } no encontrado`);
    }
    return record;
  }


  async update(idBloque: number, updateBloquDto: UpdateBloquDto) {
    const recordToUpdate = await this.findOne(idBloque);
    if (!recordToUpdate) {
      throw new NotFoundException(`Bloqu con ID #${ idBloque } no encontrado`);
    }
    const updatedRecord = this.bloquRepository.merge(recordToUpdate, updateBloquDto);
    return this.bloquRepository.save(updatedRecord);
  }

  async remove(idBloque: number) {
    const record = await this.findOne(idBloque);
    return this.bloquRepository.remove(record);
  }
}