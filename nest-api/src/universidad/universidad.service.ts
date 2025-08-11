import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUniversidadDto } from './dto/create-universidad.dto';
import { UpdateUniversidadDto } from './dto/update-universidad.dto';
import { Universidad } from './entities/universidad.entity';


@Injectable()
export class UniversidadService {
  constructor(
    @InjectRepository(Universidad)
    private readonly universidadRepository: Repository<Universidad>,
  ) {}

  create(createUniversidadDto: CreateUniversidadDto) {
    const newRecord = this.universidadRepository.create(createUniversidadDto);
    return this.universidadRepository.save(newRecord);
  }

  findAll() {
    return this.universidadRepository.find();
  }

  async findOne(idUniversidad: number) {
    const record = await this.universidadRepository.findOneBy({ [ 'idUniversidad' ]: idUniversidad } as any);
    if (!record) {
      throw new NotFoundException(`Universidad con ID #${ idUniversidad } no encontrado`);
    }
    return record;
  }


  async update(idUniversidad: number, updateUniversidadDto: UpdateUniversidadDto) {
    const recordToUpdate = await this.findOne(idUniversidad);
    if (!recordToUpdate) {
      throw new NotFoundException(`Universidad con ID #${ idUniversidad } no encontrado`);
    }
    const updatedRecord = this.universidadRepository.merge(recordToUpdate, updateUniversidadDto);
    return this.universidadRepository.save(updatedRecord);
  }

  async remove(idUniversidad: number) {
    const record = await this.findOne(idUniversidad);
    return this.universidadRepository.remove(record);
  }
}