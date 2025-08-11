import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFacultadDto } from './dto/create-facultad.dto';
import { UpdateFacultadDto } from './dto/update-facultad.dto';
import { Facultad } from './entities/facultad.entity';


@Injectable()
export class FacultadService {
  constructor(
    @InjectRepository(Facultad)
    private readonly facultadRepository: Repository<Facultad>,
  ) {}

  create(createFacultadDto: CreateFacultadDto) {
    const newRecord = this.facultadRepository.create(createFacultadDto);
    return this.facultadRepository.save(newRecord);
  }

  findAll() {
    return this.facultadRepository.find();
  }

  async findOne(idFacultad: number) {
    const record = await this.facultadRepository.findOneBy({ [ 'idFacultad' ]: idFacultad } as any);
    if (!record) {
      throw new NotFoundException(`Facultad con ID #${ idFacultad } no encontrado`);
    }
    return record;
  }


  async update(idFacultad: number, updateFacultadDto: UpdateFacultadDto) {
    const recordToUpdate = await this.findOne(idFacultad);
    if (!recordToUpdate) {
      throw new NotFoundException(`Facultad con ID #${ idFacultad } no encontrado`);
    }
    const updatedRecord = this.facultadRepository.merge(recordToUpdate, updateFacultadDto);
    return this.facultadRepository.save(updatedRecord);
  }

  async remove(idFacultad: number) {
    const record = await this.findOne(idFacultad);
    return this.facultadRepository.remove(record);
  }
}