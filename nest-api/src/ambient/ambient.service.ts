import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAmbientDto } from './dto/create-ambient.dto';
import { UpdateAmbientDto } from './dto/update-ambient.dto';
import { Ambient } from './entities/ambient.entity';


@Injectable()
export class AmbientService {
  constructor(
    @InjectRepository(Ambient)
    private readonly ambientRepository: Repository<Ambient>,
  ) {}

  create(createAmbientDto: CreateAmbientDto) {
    const newRecord = this.ambientRepository.create(createAmbientDto);
    return this.ambientRepository.save(newRecord);
  }

  findAll() {
    return this.ambientRepository.find();
  }

  async findOne(idAmbiente: number) {
    const record = await this.ambientRepository.findOneBy({ [ 'idAmbiente' ]: idAmbiente } as any);
    if (!record) {
      throw new NotFoundException(`Ambient con ID #${ idAmbiente } no encontrado`);
    }
    return record;
  }


  async update(idAmbiente: number, updateAmbientDto: UpdateAmbientDto) {
    const recordToUpdate = await this.findOne(idAmbiente);
    if (!recordToUpdate) {
      throw new NotFoundException(`Ambient con ID #${ idAmbiente } no encontrado`);
    }
    const updatedRecord = this.ambientRepository.merge(recordToUpdate, updateAmbientDto);
    return this.ambientRepository.save(updatedRecord);
  }

  async remove(idAmbiente: number) {
    const record = await this.findOne(idAmbiente);
    return this.ambientRepository.remove(record);
  }
}