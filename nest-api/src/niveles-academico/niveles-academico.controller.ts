import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { NivelesAcademicoService } from './niveles-academico.service';
import { CreateNivelesAcademicoDto } from './dto/create-niveles-academico.dto';
import { UpdateNivelesAcademicoDto } from './dto/update-niveles-academico.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('niveles_academicos')
export class NivelesAcademicoController {
  constructor(private readonly nivelesAcademicoService: NivelesAcademicoService) {}

  @Post()
  create(@Body() createNivelesAcademicoDto: CreateNivelesAcademicoDto) {
    return this.nivelesAcademicoService.create(createNivelesAcademicoDto);
  }

  @Get()
  findAll() {
    return this.nivelesAcademicoService.findAll();
  }

  @Get(':id_nivel_academico')
  findOne(@Param('id_nivel_academico', ParseIntPipe) idNivelAcademico: number) {
    return this.nivelesAcademicoService.findOne(idNivelAcademico);
  }

  @Patch(':id_nivel_academico')
  update(@Param('id_nivel_academico', ParseIntPipe) idNivelAcademico: number, @Body() updateNivelesAcademicoDto: UpdateNivelesAcademicoDto) {
    return this.nivelesAcademicoService.update(idNivelAcademico, updateNivelesAcademicoDto);
  }

  @Delete(':id_nivel_academico')
  remove(@Param('id_nivel_academico', ParseIntPipe) idNivelAcademico: number) {
    return this.nivelesAcademicoService.remove(idNivelAcademico);
  }
}