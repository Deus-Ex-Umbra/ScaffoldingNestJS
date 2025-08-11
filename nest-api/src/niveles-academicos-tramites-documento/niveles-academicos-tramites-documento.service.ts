import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNivelesAcademicosTramitesDocumentoDto } from './dto/create-niveles-academicos-tramites-documento.dto';
import { UpdateNivelesAcademicosTramitesDocumentoDto } from './dto/update-niveles-academicos-tramites-documento.dto';
import { NivelesAcademicosTramitesDocumento } from './entities/niveles-academicos-tramites-documento.entity';


@Injectable()
export class NivelesAcademicosTramitesDocumentoService {
  constructor(
    @InjectRepository(NivelesAcademicosTramitesDocumento)
    private readonly nivelesAcademicosTramitesDocumentoRepository: Repository<NivelesAcademicosTramitesDocumento>,
  ) {}

  create(createNivelesAcademicosTramitesDocumentoDto: CreateNivelesAcademicosTramitesDocumentoDto) {
    const newRecord = this.nivelesAcademicosTramitesDocumentoRepository.create(createNivelesAcademicosTramitesDocumentoDto);
    return this.nivelesAcademicosTramitesDocumentoRepository.save(newRecord);
  }

  findAll() {
    return this.nivelesAcademicosTramitesDocumentoRepository.find();
  }

  async findOne(idNivelAcademicoTramiteDocumento: number) {
    const record = await this.nivelesAcademicosTramitesDocumentoRepository.findOneBy({ [ 'idNivelAcademicoTramiteDocumento' ]: idNivelAcademicoTramiteDocumento } as any);
    if (!record) {
      throw new NotFoundException(`NivelesAcademicosTramitesDocumento con ID #${ idNivelAcademicoTramiteDocumento } no encontrado`);
    }
    return record;
  }


  async update(idNivelAcademicoTramiteDocumento: number, updateNivelesAcademicosTramitesDocumentoDto: UpdateNivelesAcademicosTramitesDocumentoDto) {
    const recordToUpdate = await this.findOne(idNivelAcademicoTramiteDocumento);
    if (!recordToUpdate) {
      throw new NotFoundException(`NivelesAcademicosTramitesDocumento con ID #${ idNivelAcademicoTramiteDocumento } no encontrado`);
    }
    const updatedRecord = this.nivelesAcademicosTramitesDocumentoRepository.merge(recordToUpdate, updateNivelesAcademicosTramitesDocumentoDto);
    return this.nivelesAcademicosTramitesDocumentoRepository.save(updatedRecord);
  }

  async remove(idNivelAcademicoTramiteDocumento: number) {
    const record = await this.findOne(idNivelAcademicoTramiteDocumento);
    return this.nivelesAcademicosTramitesDocumentoRepository.remove(record);
  }
}