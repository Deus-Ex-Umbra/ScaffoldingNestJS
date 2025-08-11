import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePosgradoNivelDto } from './dto/create-posgrado-nivel.dto';
import { UpdatePosgradoNivelDto } from './dto/update-posgrado-nivel.dto';
import { PosgradoNivel } from './entities/posgrado-nivel.entity';


@Injectable()
export class PosgradoNivelService {
  constructor(
    @InjectRepository(PosgradoNivel)
    private readonly posgradoNivelRepository: Repository<PosgradoNivel>,
  ) {}

  create(createPosgradoNivelDto: CreatePosgradoNivelDto) {
    const newRecord = this.posgradoNivelRepository.create(createPosgradoNivelDto);
    return this.posgradoNivelRepository.save(newRecord);
  }

  findAll() {
    return this.posgradoNivelRepository.find();
  }

  async findOne(idPosgradoNivel: number) {
    const record = await this.posgradoNivelRepository.findOneBy({ [ 'idPosgradoNivel' ]: idPosgradoNivel } as any);
    if (!record) {
      throw new NotFoundException(`PosgradoNivel con ID #${ idPosgradoNivel } no encontrado`);
    }
    return record;
  }


  async update(idPosgradoNivel: number, updatePosgradoNivelDto: UpdatePosgradoNivelDto) {
    const recordToUpdate = await this.findOne(idPosgradoNivel);
    if (!recordToUpdate) {
      throw new NotFoundException(`PosgradoNivel con ID #${ idPosgradoNivel } no encontrado`);
    }
    const updatedRecord = this.posgradoNivelRepository.merge(recordToUpdate, updatePosgradoNivelDto);
    return this.posgradoNivelRepository.save(updatedRecord);
  }

  async remove(idPosgradoNivel: number) {
    const record = await this.findOne(idPosgradoNivel);
    return this.posgradoNivelRepository.remove(record);
  }
}