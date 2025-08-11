import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { TramitesDocumentoService } from './tramites-documento.service';
import { CreateTramitesDocumentoDto } from './dto/create-tramites-documento.dto';
import { UpdateTramitesDocumentoDto } from './dto/update-tramites-documento.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('tramites_documentos')
export class TramitesDocumentoController {
  constructor(private readonly tramitesDocumentoService: TramitesDocumentoService) {}

  @Post()
  create(@Body() createTramitesDocumentoDto: CreateTramitesDocumentoDto) {
    return this.tramitesDocumentoService.create(createTramitesDocumentoDto);
  }

  @Get()
  findAll() {
    return this.tramitesDocumentoService.findAll();
  }

  @Get(':id_tramite_documento')
  findOne(@Param('id_tramite_documento', ParseIntPipe) idTramiteDocumento: number) {
    return this.tramitesDocumentoService.findOne(idTramiteDocumento);
  }

  @Patch(':id_tramite_documento')
  update(@Param('id_tramite_documento', ParseIntPipe) idTramiteDocumento: number, @Body() updateTramitesDocumentoDto: UpdateTramitesDocumentoDto) {
    return this.tramitesDocumentoService.update(idTramiteDocumento, updateTramitesDocumentoDto);
  }

  @Delete(':id_tramite_documento')
  remove(@Param('id_tramite_documento', ParseIntPipe) idTramiteDocumento: number) {
    return this.tramitesDocumentoService.remove(idTramiteDocumento);
  }
}