import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCarrerasNivelesAcademicoDto } from './dto/create-carreras-niveles-academico.dto';
import { UpdateCarrerasNivelesAcademicoDto } from './dto/update-carreras-niveles-academico.dto';
import { CarrerasNivelesAcademico } from './entities/carreras-niveles-academico.entity';


@Injectable()
export class CarrerasNivelesAcademicoService {
  constructor(
    @InjectRepository(CarrerasNivelesAcademico)
    private readonly carrerasNivelesAcademicoRepository: Repository<CarrerasNivelesAcademico>,
  ) {}

  create(createCarrerasNivelesAcademicoDto: CreateCarrerasNivelesAcademicoDto) {
    const newRecord = this.carrerasNivelesAcademicoRepository.create(createCarrerasNivelesAcademicoDto);
    return this.carrerasNivelesAcademicoRepository.save(newRecord);
  }

  findAll() {
    return this.carrerasNivelesAcademicoRepository.find();
  }

  async findOne(idCarreraNivelAcademico: number) {
    const record = await this.carrerasNivelesAcademicoRepository.findOneBy({ [ 'idCarreraNivelAcademico' ]: idCarreraNivelAcademico } as any);
    if (!record) {
      throw new NotFoundException(`CarrerasNivelesAcademico con ID #${ idCarreraNivelAcademico } no encontrado`);
    }
    return record;
  }


  async update(idCarreraNivelAcademico: number, updateCarrerasNivelesAcademicoDto: UpdateCarrerasNivelesAcademicoDto) {
    const recordToUpdate = await this.findOne(idCarreraNivelAcademico);
    if (!recordToUpdate) {
      throw new NotFoundException(`CarrerasNivelesAcademico con ID #${ idCarreraNivelAcademico } no encontrado`);
    }
    const updatedRecord = this.carrerasNivelesAcademicoRepository.merge(recordToUpdate, updateCarrerasNivelesAcademicoDto);
    return this.carrerasNivelesAcademicoRepository.save(updatedRecord);
  }

  async remove(idCarreraNivelAcademico: number) {
    const record = await this.findOne(idCarreraNivelAcademico);
    return this.carrerasNivelesAcademicoRepository.remove(record);
  }
}