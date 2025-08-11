import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNivelesAcademicoDto } from './dto/create-niveles-academico.dto';
import { UpdateNivelesAcademicoDto } from './dto/update-niveles-academico.dto';
import { NivelesAcademico } from './entities/niveles-academico.entity';


@Injectable()
export class NivelesAcademicoService {
  constructor(
    @InjectRepository(NivelesAcademico)
    private readonly nivelesAcademicoRepository: Repository<NivelesAcademico>,
  ) {}

  create(createNivelesAcademicoDto: CreateNivelesAcademicoDto) {
    const newRecord = this.nivelesAcademicoRepository.create(createNivelesAcademicoDto);
    return this.nivelesAcademicoRepository.save(newRecord);
  }

  findAll() {
    return this.nivelesAcademicoRepository.find();
  }

  async findOne(idNivelAcademico: number) {
    const record = await this.nivelesAcademicoRepository.findOneBy({ [ 'idNivelAcademico' ]: idNivelAcademico } as any);
    if (!record) {
      throw new NotFoundException(`NivelesAcademico con ID #${ idNivelAcademico } no encontrado`);
    }
    return record;
  }


  async update(idNivelAcademico: number, updateNivelesAcademicoDto: UpdateNivelesAcademicoDto) {
    const recordToUpdate = await this.findOne(idNivelAcademico);
    if (!recordToUpdate) {
      throw new NotFoundException(`NivelesAcademico con ID #${ idNivelAcademico } no encontrado`);
    }
    const updatedRecord = this.nivelesAcademicoRepository.merge(recordToUpdate, updateNivelesAcademicoDto);
    return this.nivelesAcademicoRepository.save(updatedRecord);
  }

  async remove(idNivelAcademico: number) {
    const record = await this.findOne(idNivelAcademico);
    return this.nivelesAcademicoRepository.remove(record);
  }
}