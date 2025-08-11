import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSedDto } from './dto/create-sed.dto';
import { UpdateSedDto } from './dto/update-sed.dto';
import { Sed } from './entities/sed.entity';


@Injectable()
export class SedService {
  constructor(
    @InjectRepository(Sed)
    private readonly sedRepository: Repository<Sed>,
  ) {}

  create(createSedDto: CreateSedDto) {
    const newRecord = this.sedRepository.create(createSedDto);
    return this.sedRepository.save(newRecord);
  }

  findAll() {
    return this.sedRepository.find();
  }

  async findOne(idSede: number) {
    const record = await this.sedRepository.findOneBy({ [ 'idSede' ]: idSede } as any);
    if (!record) {
      throw new NotFoundException(`Sed con ID #${ idSede } no encontrado`);
    }
    return record;
  }


  async update(idSede: number, updateSedDto: UpdateSedDto) {
    const recordToUpdate = await this.findOne(idSede);
    if (!recordToUpdate) {
      throw new NotFoundException(`Sed con ID #${ idSede } no encontrado`);
    }
    const updatedRecord = this.sedRepository.merge(recordToUpdate, updateSedDto);
    return this.sedRepository.save(updatedRecord);
  }

  async remove(idSede: number) {
    const record = await this.findOne(idSede);
    return this.sedRepository.remove(record);
  }
}