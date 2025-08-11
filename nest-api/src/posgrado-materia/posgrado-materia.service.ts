import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePosgradoMateriaDto } from './dto/create-posgrado-materia.dto';
import { UpdatePosgradoMateriaDto } from './dto/update-posgrado-materia.dto';
import { PosgradoMateria } from './entities/posgrado-materia.entity';


@Injectable()
export class PosgradoMateriaService {
  constructor(
    @InjectRepository(PosgradoMateria)
    private readonly posgradoMateriaRepository: Repository<PosgradoMateria>,
  ) {}

  create(createPosgradoMateriaDto: CreatePosgradoMateriaDto) {
    const newRecord = this.posgradoMateriaRepository.create(createPosgradoMateriaDto);
    return this.posgradoMateriaRepository.save(newRecord);
  }

  findAll() {
    return this.posgradoMateriaRepository.find();
  }

  async findOne(idPosgradoMateria: number) {
    const record = await this.posgradoMateriaRepository.findOneBy({ [ 'idPosgradoMateria' ]: idPosgradoMateria } as any);
    if (!record) {
      throw new NotFoundException(`PosgradoMateria con ID #${ idPosgradoMateria } no encontrado`);
    }
    return record;
  }


  async update(idPosgradoMateria: number, updatePosgradoMateriaDto: UpdatePosgradoMateriaDto) {
    const recordToUpdate = await this.findOne(idPosgradoMateria);
    if (!recordToUpdate) {
      throw new NotFoundException(`PosgradoMateria con ID #${ idPosgradoMateria } no encontrado`);
    }
    const updatedRecord = this.posgradoMateriaRepository.merge(recordToUpdate, updatePosgradoMateriaDto);
    return this.posgradoMateriaRepository.save(updatedRecord);
  }

  async remove(idPosgradoMateria: number) {
    const record = await this.findOne(idPosgradoMateria);
    return this.posgradoMateriaRepository.remove(record);
  }
}