import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePosgradoAlumnosDocumentoDto } from './dto/create-posgrado-alumnos-documento.dto';
import { UpdatePosgradoAlumnosDocumentoDto } from './dto/update-posgrado-alumnos-documento.dto';
import { PosgradoAlumnosDocumento } from './entities/posgrado-alumnos-documento.entity';


@Injectable()
export class PosgradoAlumnosDocumentoService {
  constructor(
    @InjectRepository(PosgradoAlumnosDocumento)
    private readonly posgradoAlumnosDocumentoRepository: Repository<PosgradoAlumnosDocumento>,
  ) {}

  create(createPosgradoAlumnosDocumentoDto: CreatePosgradoAlumnosDocumentoDto) {
    const newRecord = this.posgradoAlumnosDocumentoRepository.create(createPosgradoAlumnosDocumentoDto);
    return this.posgradoAlumnosDocumentoRepository.save(newRecord);
  }

  findAll() {
    return this.posgradoAlumnosDocumentoRepository.find();
  }

  async findOne(idPosgradoAlumnoDocumento: number) {
    const record = await this.posgradoAlumnosDocumentoRepository.findOneBy({ [ 'idPosgradoAlumnoDocumento' ]: idPosgradoAlumnoDocumento } as any);
    if (!record) {
      throw new NotFoundException(`PosgradoAlumnosDocumento con ID #${ idPosgradoAlumnoDocumento } no encontrado`);
    }
    return record;
  }


  async update(idPosgradoAlumnoDocumento: number, updatePosgradoAlumnosDocumentoDto: UpdatePosgradoAlumnosDocumentoDto) {
    const recordToUpdate = await this.findOne(idPosgradoAlumnoDocumento);
    if (!recordToUpdate) {
      throw new NotFoundException(`PosgradoAlumnosDocumento con ID #${ idPosgradoAlumnoDocumento } no encontrado`);
    }
    const updatedRecord = this.posgradoAlumnosDocumentoRepository.merge(recordToUpdate, updatePosgradoAlumnosDocumentoDto);
    return this.posgradoAlumnosDocumentoRepository.save(updatedRecord);
  }

  async remove(idPosgradoAlumnoDocumento: number) {
    const record = await this.findOne(idPosgradoAlumnoDocumento);
    return this.posgradoAlumnosDocumentoRepository.remove(record);
  }
}