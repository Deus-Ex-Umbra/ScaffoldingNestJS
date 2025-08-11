import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { NivelesAcademicosTramitesDocumentoService } from './niveles-academicos-tramites-documento.service';
import { CreateNivelesAcademicosTramitesDocumentoDto } from './dto/create-niveles-academicos-tramites-documento.dto';
import { UpdateNivelesAcademicosTramitesDocumentoDto } from './dto/update-niveles-academicos-tramites-documento.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('niveles_academicos_tramites_documentos')
export class NivelesAcademicosTramitesDocumentoController {
  constructor(private readonly nivelesAcademicosTramitesDocumentoService: NivelesAcademicosTramitesDocumentoService) {}

  @Post()
  create(@Body() createNivelesAcademicosTramitesDocumentoDto: CreateNivelesAcademicosTramitesDocumentoDto) {
    return this.nivelesAcademicosTramitesDocumentoService.create(createNivelesAcademicosTramitesDocumentoDto);
  }

  @Get()
  findAll() {
    return this.nivelesAcademicosTramitesDocumentoService.findAll();
  }

  @Get(':id_nivel_academico_tramite_documento')
  findOne(@Param('id_nivel_academico_tramite_documento', ParseIntPipe) idNivelAcademicoTramiteDocumento: number) {
    return this.nivelesAcademicosTramitesDocumentoService.findOne(idNivelAcademicoTramiteDocumento);
  }

  @Patch(':id_nivel_academico_tramite_documento')
  update(@Param('id_nivel_academico_tramite_documento', ParseIntPipe) idNivelAcademicoTramiteDocumento: number, @Body() updateNivelesAcademicosTramitesDocumentoDto: UpdateNivelesAcademicosTramitesDocumentoDto) {
    return this.nivelesAcademicosTramitesDocumentoService.update(idNivelAcademicoTramiteDocumento, updateNivelesAcademicosTramitesDocumentoDto);
  }

  @Delete(':id_nivel_academico_tramite_documento')
  remove(@Param('id_nivel_academico_tramite_documento', ParseIntPipe) idNivelAcademicoTramiteDocumento: number) {
    return this.nivelesAcademicosTramitesDocumentoService.remove(idNivelAcademicoTramiteDocumento);
  }
}