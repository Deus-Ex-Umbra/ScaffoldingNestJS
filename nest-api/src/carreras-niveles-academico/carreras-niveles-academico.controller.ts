import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { CarrerasNivelesAcademicoService } from './carreras-niveles-academico.service';
import { CreateCarrerasNivelesAcademicoDto } from './dto/create-carreras-niveles-academico.dto';
import { UpdateCarrerasNivelesAcademicoDto } from './dto/update-carreras-niveles-academico.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('carreras_niveles_academicos')
export class CarrerasNivelesAcademicoController {
  constructor(private readonly carrerasNivelesAcademicoService: CarrerasNivelesAcademicoService) {}

  @Post()
  create(@Body() createCarrerasNivelesAcademicoDto: CreateCarrerasNivelesAcademicoDto) {
    return this.carrerasNivelesAcademicoService.create(createCarrerasNivelesAcademicoDto);
  }

  @Get()
  findAll() {
    return this.carrerasNivelesAcademicoService.findAll();
  }

  @Get(':id_carrera_nivel_academico')
  findOne(@Param('id_carrera_nivel_academico', ParseIntPipe) idCarreraNivelAcademico: number) {
    return this.carrerasNivelesAcademicoService.findOne(idCarreraNivelAcademico);
  }

  @Patch(':id_carrera_nivel_academico')
  update(@Param('id_carrera_nivel_academico', ParseIntPipe) idCarreraNivelAcademico: number, @Body() updateCarrerasNivelesAcademicoDto: UpdateCarrerasNivelesAcademicoDto) {
    return this.carrerasNivelesAcademicoService.update(idCarreraNivelAcademico, updateCarrerasNivelesAcademicoDto);
  }

  @Delete(':id_carrera_nivel_academico')
  remove(@Param('id_carrera_nivel_academico', ParseIntPipe) idCarreraNivelAcademico: number) {
    return this.carrerasNivelesAcademicoService.remove(idCarreraNivelAcademico);
  }
}