import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { HorasClasService } from './horas-clas.service';
import { CreateHorasClasDto } from './dto/create-horas-clas.dto';
import { UpdateHorasClasDto } from './dto/update-horas-clas.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('horas_clases')
export class HorasClasController {
  constructor(private readonly horasClasService: HorasClasService) {}

  @Post()
  create(@Body() createHorasClasDto: CreateHorasClasDto) {
    return this.horasClasService.create(createHorasClasDto);
  }

  @Get()
  findAll() {
    return this.horasClasService.findAll();
  }

  @Get(':id_hora_clase')
  findOne(@Param('id_hora_clase', ParseIntPipe) idHoraClase: number) {
    return this.horasClasService.findOne(idHoraClase);
  }

  @Patch(':id_hora_clase')
  update(@Param('id_hora_clase', ParseIntPipe) idHoraClase: number, @Body() updateHorasClasDto: UpdateHorasClasDto) {
    return this.horasClasService.update(idHoraClase, updateHorasClasDto);
  }

  @Delete(':id_hora_clase')
  remove(@Param('id_hora_clase', ParseIntPipe) idHoraClase: number) {
    return this.horasClasService.remove(idHoraClase);
  }
}