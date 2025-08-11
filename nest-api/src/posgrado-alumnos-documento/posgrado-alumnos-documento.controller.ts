import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { PosgradoAlumnosDocumentoService } from './posgrado-alumnos-documento.service';
import { CreatePosgradoAlumnosDocumentoDto } from './dto/create-posgrado-alumnos-documento.dto';
import { UpdatePosgradoAlumnosDocumentoDto } from './dto/update-posgrado-alumnos-documento.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('posgrado_alumnos_documentos')
export class PosgradoAlumnosDocumentoController {
  constructor(private readonly posgradoAlumnosDocumentoService: PosgradoAlumnosDocumentoService) {}

  @Post()
  create(@Body() createPosgradoAlumnosDocumentoDto: CreatePosgradoAlumnosDocumentoDto) {
    return this.posgradoAlumnosDocumentoService.create(createPosgradoAlumnosDocumentoDto);
  }

  @Get()
  findAll() {
    return this.posgradoAlumnosDocumentoService.findAll();
  }

  @Get(':id_posgrado_alumno_documento')
  findOne(@Param('id_posgrado_alumno_documento', ParseIntPipe) idPosgradoAlumnoDocumento: number) {
    return this.posgradoAlumnosDocumentoService.findOne(idPosgradoAlumnoDocumento);
  }

  @Patch(':id_posgrado_alumno_documento')
  update(@Param('id_posgrado_alumno_documento', ParseIntPipe) idPosgradoAlumnoDocumento: number, @Body() updatePosgradoAlumnosDocumentoDto: UpdatePosgradoAlumnosDocumentoDto) {
    return this.posgradoAlumnosDocumentoService.update(idPosgradoAlumnoDocumento, updatePosgradoAlumnosDocumentoDto);
  }

  @Delete(':id_posgrado_alumno_documento')
  remove(@Param('id_posgrado_alumno_documento', ParseIntPipe) idPosgradoAlumnoDocumento: number) {
    return this.posgradoAlumnosDocumentoService.remove(idPosgradoAlumnoDocumento);
  }
}