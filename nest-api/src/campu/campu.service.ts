import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCampuDto } from './dto/create-campu.dto';
import { UpdateCampuDto } from './dto/update-campu.dto';
import { Campu } from './entities/campu.entity';


@Injectable()
export class CampuService {
  constructor(
    @InjectRepository(Campu)
    private readonly campuRepository: Repository<Campu>,
  ) {}

  create(createCampuDto: CreateCampuDto) {
    const newRecord = this.campuRepository.create(createCampuDto);
    return this.campuRepository.save(newRecord);
  }

  findAll() {
    return this.campuRepository.find();
  }

  async findOne(idCampu: number) {
    const record = await this.campuRepository.findOneBy({ [ 'idCampu' ]: idCampu } as any);
    if (!record) {
      throw new NotFoundException(`Campu con ID #${ idCampu } no encontrado`);
    }
    return record;
  }


  async update(idCampu: number, updateCampuDto: UpdateCampuDto) {
    const recordToUpdate = await this.findOne(idCampu);
    if (!recordToUpdate) {
      throw new NotFoundException(`Campu con ID #${ idCampu } no encontrado`);
    }
    const updatedRecord = this.campuRepository.merge(recordToUpdate, updateCampuDto);
    return this.campuRepository.save(updatedRecord);
  }

  async remove(idCampu: number) {
    const record = await this.findOne(idCampu);
    return this.campuRepository.remove(record);
  }
}