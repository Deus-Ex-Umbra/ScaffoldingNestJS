import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { GestionesPeriodoService } from './gestiones-periodo.service';
import { CreateGestionesPeriodoDto } from './dto/create-gestiones-periodo.dto';
import { UpdateGestionesPeriodoDto } from './dto/update-gestiones-periodo.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('gestiones_periodos')
export class GestionesPeriodoController {
  constructor(private readonly gestionesPeriodoService: GestionesPeriodoService) {}

  @Post()
  create(@Body() createGestionesPeriodoDto: CreateGestionesPeriodoDto) {
    return this.gestionesPeriodoService.create(createGestionesPeriodoDto);
  }

  @Get()
  findAll() {
    return this.gestionesPeriodoService.findAll();
  }

  @Get(':id_gestion_periodo')
  findOne(@Param('id_gestion_periodo', ParseIntPipe) idGestionPeriodo: number) {
    return this.gestionesPeriodoService.findOne(idGestionPeriodo);
  }

  @Patch(':id_gestion_periodo')
  update(@Param('id_gestion_periodo', ParseIntPipe) idGestionPeriodo: number, @Body() updateGestionesPeriodoDto: UpdateGestionesPeriodoDto) {
    return this.gestionesPeriodoService.update(idGestionPeriodo, updateGestionesPeriodoDto);
  }

  @Delete(':id_gestion_periodo')
  remove(@Param('id_gestion_periodo', ParseIntPipe) idGestionPeriodo: number) {
    return this.gestionesPeriodoService.remove(idGestionPeriodo);
  }
}