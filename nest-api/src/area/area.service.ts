import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';
import { Area } from './entities/area.entity';


@Injectable()
export class AreaService {
  constructor(
    @InjectRepository(Area)
    private readonly areaRepository: Repository<Area>,
  ) {}

  create(createAreaDto: CreateAreaDto) {
    const newRecord = this.areaRepository.create(createAreaDto);
    return this.areaRepository.save(newRecord);
  }

  findAll() {
    return this.areaRepository.find();
  }

  async findOne(idArea: number) {
    const record = await this.areaRepository.findOneBy({ [ 'idArea' ]: idArea } as any);
    if (!record) {
      throw new NotFoundException(`Area con ID #${ idArea } no encontrado`);
    }
    return record;
  }


  async update(idArea: number, updateAreaDto: UpdateAreaDto) {
    const recordToUpdate = await this.findOne(idArea);
    if (!recordToUpdate) {
      throw new NotFoundException(`Area con ID #${ idArea } no encontrado`);
    }
    const updatedRecord = this.areaRepository.merge(recordToUpdate, updateAreaDto);
    return this.areaRepository.save(updatedRecord);
  }

  async remove(idArea: number) {
    const record = await this.findOne(idArea);
    return this.areaRepository.remove(record);
  }
}