import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { PosgradoAsignacionesDocentService } from './posgrado-asignaciones-docent.service';
import { CreatePosgradoAsignacionesDocentDto } from './dto/create-posgrado-asignaciones-docent.dto';
import { UpdatePosgradoAsignacionesDocentDto } from './dto/update-posgrado-asignaciones-docent.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('posgrado_asignaciones_docentes')
export class PosgradoAsignacionesDocentController {
  constructor(private readonly posgradoAsignacionesDocentService: PosgradoAsignacionesDocentService) {}

  @Post()
  create(@Body() createPosgradoAsignacionesDocentDto: CreatePosgradoAsignacionesDocentDto) {
    return this.posgradoAsignacionesDocentService.create(createPosgradoAsignacionesDocentDto);
  }

  @Get()
  findAll() {
    return this.posgradoAsignacionesDocentService.findAll();
  }

  @Get(':id_posgrado_asignacion_docente')
  findOne(@Param('id_posgrado_asignacion_docente', ParseIntPipe) idPosgradoAsignacionDocente: number) {
    return this.posgradoAsignacionesDocentService.findOne(idPosgradoAsignacionDocente);
  }

  @Patch(':id_posgrado_asignacion_docente')
  update(@Param('id_posgrado_asignacion_docente', ParseIntPipe) idPosgradoAsignacionDocente: number, @Body() updatePosgradoAsignacionesDocentDto: UpdatePosgradoAsignacionesDocentDto) {
    return this.posgradoAsignacionesDocentService.update(idPosgradoAsignacionDocente, updatePosgradoAsignacionesDocentDto);
  }

  @Delete(':id_posgrado_asignacion_docente')
  remove(@Param('id_posgrado_asignacion_docente', ParseIntPipe) idPosgradoAsignacionDocente: number) {
    return this.posgradoAsignacionesDocentService.remove(idPosgradoAsignacionDocente);
  }
}