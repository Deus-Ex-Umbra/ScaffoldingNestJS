import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { EstadosCivilService } from './estados-civil.service';
import { CreateEstadosCivilDto } from './dto/create-estados-civil.dto';
import { UpdateEstadosCivilDto } from './dto/update-estados-civil.dto';

@Controller('estados_civiles')
export class EstadosCivilController {
  constructor(private readonly estadosCivilService: EstadosCivilService) {}

  @Post()
  create(@Body() createEstadosCivilDto: CreateEstadosCivilDto) {
    return this.estadosCivilService.create(createEstadosCivilDto);
  }

  @Get()
  findAll() {
    return this.estadosCivilService.findAll();
  }

  @Get(':id_estado_civil')
  findOne(@Param('id_estado_civil', ParseIntPipe) idEstadoCivil: number) {
    return this.estadosCivilService.findOne(idEstadoCivil);
  }

  @Patch(':id_estado_civil')
  update(@Param('id_estado_civil', ParseIntPipe) idEstadoCivil: number, @Body() updateEstadosCivilDto: UpdateEstadosCivilDto) {
    return this.estadosCivilService.update(idEstadoCivil, updateEstadosCivilDto);
  }

  @Delete(':id_estado_civil')
  remove(@Param('id_estado_civil', ParseIntPipe) idEstadoCivil: number) {
    return this.estadosCivilService.remove(idEstadoCivil);
  }
}