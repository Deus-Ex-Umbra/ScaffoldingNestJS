import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { PosgradoCalificacionService } from './posgrado-calificacion.service';
import { CreatePosgradoCalificacionDto } from './dto/create-posgrado-calificacion.dto';
import { UpdatePosgradoCalificacionDto } from './dto/update-posgrado-calificacion.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('posgrado_calificaciones')
export class PosgradoCalificacionController {
  constructor(private readonly posgradoCalificacionService: PosgradoCalificacionService) {}

  @Post()
  create(@Body() createPosgradoCalificacionDto: CreatePosgradoCalificacionDto) {
    return this.posgradoCalificacionService.create(createPosgradoCalificacionDto);
  }

  @Get()
  findAll() {
    return this.posgradoCalificacionService.findAll();
  }

  @Get(':id_postgrado_calificacion')
  findOne(@Param('id_postgrado_calificacion', ParseIntPipe) idPostgradoCalificacion: number) {
    return this.posgradoCalificacionService.findOne(idPostgradoCalificacion);
  }

  @Patch(':id_postgrado_calificacion')
  update(@Param('id_postgrado_calificacion', ParseIntPipe) idPostgradoCalificacion: number, @Body() updatePosgradoCalificacionDto: UpdatePosgradoCalificacionDto) {
    return this.posgradoCalificacionService.update(idPostgradoCalificacion, updatePosgradoCalificacionDto);
  }

  @Delete(':id_postgrado_calificacion')
  remove(@Param('id_postgrado_calificacion', ParseIntPipe) idPostgradoCalificacion: number) {
    return this.posgradoCalificacionService.remove(idPostgradoCalificacion);
  }
}