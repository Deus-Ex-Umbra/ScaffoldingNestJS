import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { FacultadesEdificioService } from './facultades-edificio.service';
import { CreateFacultadesEdificioDto } from './dto/create-facultades-edificio.dto';
import { UpdateFacultadesEdificioDto } from './dto/update-facultades-edificio.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('facultades_edificios')
export class FacultadesEdificioController {
  constructor(private readonly facultadesEdificioService: FacultadesEdificioService) {}

  @Post()
  create(@Body() createFacultadesEdificioDto: CreateFacultadesEdificioDto) {
    return this.facultadesEdificioService.create(createFacultadesEdificioDto);
  }

  @Get()
  findAll() {
    return this.facultadesEdificioService.findAll();
  }

  @Get(':id_facultad_edificio')
  findOne(@Param('id_facultad_edificio', ParseIntPipe) idFacultadEdificio: number) {
    return this.facultadesEdificioService.findOne(idFacultadEdificio);
  }

  @Patch(':id_facultad_edificio')
  update(@Param('id_facultad_edificio', ParseIntPipe) idFacultadEdificio: number, @Body() updateFacultadesEdificioDto: UpdateFacultadesEdificioDto) {
    return this.facultadesEdificioService.update(idFacultadEdificio, updateFacultadesEdificioDto);
  }

  @Delete(':id_facultad_edificio')
  remove(@Param('id_facultad_edificio', ParseIntPipe) idFacultadEdificio: number) {
    return this.facultadesEdificioService.remove(idFacultadEdificio);
  }
}