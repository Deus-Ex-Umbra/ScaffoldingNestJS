import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMontosExcedentDto } from './dto/create-montos-excedent.dto';
import { UpdateMontosExcedentDto } from './dto/update-montos-excedent.dto';
import { MontosExcedent } from './entities/montos-excedent.entity';


@Injectable()
export class MontosExcedentService {
  constructor(
    @InjectRepository(MontosExcedent)
    private readonly montosExcedentRepository: Repository<MontosExcedent>,
  ) {}

  create(createMontosExcedentDto: CreateMontosExcedentDto) {
    const newRecord = this.montosExcedentRepository.create(createMontosExcedentDto);
    return this.montosExcedentRepository.save(newRecord);
  }

  findAll() {
    return this.montosExcedentRepository.find();
  }

  async findOne(idMontoExedente: number) {
    const record = await this.montosExcedentRepository.findOneBy({ [ 'idMontoExedente' ]: idMontoExedente } as any);
    if (!record) {
      throw new NotFoundException(`MontosExcedent con ID #${ idMontoExedente } no encontrado`);
    }
    return record;
  }


  async update(idMontoExedente: number, updateMontosExcedentDto: UpdateMontosExcedentDto) {
    const recordToUpdate = await this.findOne(idMontoExedente);
    if (!recordToUpdate) {
      throw new NotFoundException(`MontosExcedent con ID #${ idMontoExedente } no encontrado`);
    }
    const updatedRecord = this.montosExcedentRepository.merge(recordToUpdate, updateMontosExcedentDto);
    return this.montosExcedentRepository.save(updatedRecord);
  }

  async remove(idMontoExedente: number) {
    const record = await this.findOne(idMontoExedente);
    return this.montosExcedentRepository.remove(record);
  }
}