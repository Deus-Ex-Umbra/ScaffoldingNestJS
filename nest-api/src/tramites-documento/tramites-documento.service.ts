import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTramitesDocumentoDto } from './dto/create-tramites-documento.dto';
import { UpdateTramitesDocumentoDto } from './dto/update-tramites-documento.dto';
import { TramitesDocumento } from './entities/tramites-documento.entity';


@Injectable()
export class TramitesDocumentoService {
  constructor(
    @InjectRepository(TramitesDocumento)
    private readonly tramitesDocumentoRepository: Repository<TramitesDocumento>,
  ) {}

  create(createTramitesDocumentoDto: CreateTramitesDocumentoDto) {
    const newRecord = this.tramitesDocumentoRepository.create(createTramitesDocumentoDto);
    return this.tramitesDocumentoRepository.save(newRecord);
  }

  findAll() {
    return this.tramitesDocumentoRepository.find();
  }

  async findOne(idTramiteDocumento: number) {
    const record = await this.tramitesDocumentoRepository.findOneBy({ [ 'idTramiteDocumento' ]: idTramiteDocumento } as any);
    if (!record) {
      throw new NotFoundException(`TramitesDocumento con ID #${ idTramiteDocumento } no encontrado`);
    }
    return record;
  }


  async update(idTramiteDocumento: number, updateTramitesDocumentoDto: UpdateTramitesDocumentoDto) {
    const recordToUpdate = await this.findOne(idTramiteDocumento);
    if (!recordToUpdate) {
      throw new NotFoundException(`TramitesDocumento con ID #${ idTramiteDocumento } no encontrado`);
    }
    const updatedRecord = this.tramitesDocumentoRepository.merge(recordToUpdate, updateTramitesDocumentoDto);
    return this.tramitesDocumentoRepository.save(updatedRecord);
  }

  async remove(idTramiteDocumento: number) {
    const record = await this.findOne(idTramiteDocumento);
    return this.tramitesDocumentoRepository.remove(record);
  }
}