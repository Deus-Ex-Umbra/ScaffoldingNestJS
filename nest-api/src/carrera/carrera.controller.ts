import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { CarreraService } from './carrera.service';
import { CreateCarreraDto } from './dto/create-carrera.dto';
import { UpdateCarreraDto } from './dto/update-carrera.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('carreras')
export class CarreraController {
  constructor(private readonly carreraService: CarreraService) {}

  @Post()
  create(@Body() createCarreraDto: CreateCarreraDto) {
    return this.carreraService.create(createCarreraDto);
  }

  @Get()
  findAll() {
    return this.carreraService.findAll();
  }

  @Get(':id_carrera')
  findOne(@Param('id_carrera', ParseIntPipe) idCarrera: number) {
    return this.carreraService.findOne(idCarrera);
  }

  @Patch(':id_carrera')
  update(@Param('id_carrera', ParseIntPipe) idCarrera: number, @Body() updateCarreraDto: UpdateCarreraDto) {
    return this.carreraService.update(idCarrera, updateCarreraDto);
  }

  @Delete(':id_carrera')
  remove(@Param('id_carrera', ParseIntPipe) idCarrera: number) {
    return this.carreraService.remove(idCarrera);
  }
}