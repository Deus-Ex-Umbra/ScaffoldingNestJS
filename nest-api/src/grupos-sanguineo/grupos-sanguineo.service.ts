import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGruposSanguineoDto } from './dto/create-grupos-sanguineo.dto';
import { UpdateGruposSanguineoDto } from './dto/update-grupos-sanguineo.dto';
import { GruposSanguineo } from './entities/grupos-sanguineo.entity';


@Injectable()
export class GruposSanguineoService {
  constructor(
    @InjectRepository(GruposSanguineo)
    private readonly gruposSanguineoRepository: Repository<GruposSanguineo>,
  ) {}

  create(createGruposSanguineoDto: CreateGruposSanguineoDto) {
    const newRecord = this.gruposSanguineoRepository.create(createGruposSanguineoDto);
    return this.gruposSanguineoRepository.save(newRecord);
  }

  findAll() {
    return this.gruposSanguineoRepository.find();
  }

  async findOne(idGrupoSanguineo: number) {
    const record = await this.gruposSanguineoRepository.findOneBy({ [ 'idGrupoSanguineo' ]: idGrupoSanguineo } as any);
    if (!record) {
      throw new NotFoundException(`GruposSanguineo con ID #${ idGrupoSanguineo } no encontrado`);
    }
    return record;
  }


  async update(idGrupoSanguineo: number, updateGruposSanguineoDto: UpdateGruposSanguineoDto) {
    const recordToUpdate = await this.findOne(idGrupoSanguineo);
    if (!recordToUpdate) {
      throw new NotFoundException(`GruposSanguineo con ID #${ idGrupoSanguineo } no encontrado`);
    }
    const updatedRecord = this.gruposSanguineoRepository.merge(recordToUpdate, updateGruposSanguineoDto);
    return this.gruposSanguineoRepository.save(updatedRecord);
  }

  async remove(idGrupoSanguineo: number) {
    const record = await this.findOne(idGrupoSanguineo);
    return this.gruposSanguineoRepository.remove(record);
  }
}