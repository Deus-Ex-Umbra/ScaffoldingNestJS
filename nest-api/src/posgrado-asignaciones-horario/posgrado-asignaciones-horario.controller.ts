import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { PosgradoAsignacionesHorarioService } from './posgrado-asignaciones-horario.service';
import { CreatePosgradoAsignacionesHorarioDto } from './dto/create-posgrado-asignaciones-horario.dto';
import { UpdatePosgradoAsignacionesHorarioDto } from './dto/update-posgrado-asignaciones-horario.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('posgrado_asignaciones_horarios')
export class PosgradoAsignacionesHorarioController {
  constructor(private readonly posgradoAsignacionesHorarioService: PosgradoAsignacionesHorarioService) {}

  @Post()
  create(@Body() createPosgradoAsignacionesHorarioDto: CreatePosgradoAsignacionesHorarioDto) {
    return this.posgradoAsignacionesHorarioService.create(createPosgradoAsignacionesHorarioDto);
  }

  @Get()
  findAll() {
    return this.posgradoAsignacionesHorarioService.findAll();
  }

  @Get(':id_posgrado_asignacion_horario')
  findOne(@Param('id_posgrado_asignacion_horario', ParseIntPipe) idPosgradoAsignacionHorario: number) {
    return this.posgradoAsignacionesHorarioService.findOne(idPosgradoAsignacionHorario);
  }

  @Patch(':id_posgrado_asignacion_horario')
  update(@Param('id_posgrado_asignacion_horario', ParseIntPipe) idPosgradoAsignacionHorario: number, @Body() updatePosgradoAsignacionesHorarioDto: UpdatePosgradoAsignacionesHorarioDto) {
    return this.posgradoAsignacionesHorarioService.update(idPosgradoAsignacionHorario, updatePosgradoAsignacionesHorarioDto);
  }

  @Delete(':id_posgrado_asignacion_horario')
  remove(@Param('id_posgrado_asignacion_horario', ParseIntPipe) idPosgradoAsignacionHorario: number) {
    return this.posgradoAsignacionesHorarioService.remove(idPosgradoAsignacionHorario);
  }
}