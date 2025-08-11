import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { LocalidadService } from './localidad.service';
import { CreateLocalidadDto } from './dto/create-localidad.dto';
import { UpdateLocalidadDto } from './dto/update-localidad.dto';

@Controller('localidades')
export class LocalidadController {
  constructor(private readonly localidadService: LocalidadService) {}

  @Post()
  create(@Body() createLocalidadDto: CreateLocalidadDto) {
    return this.localidadService.create(createLocalidadDto);
  }

  @Get()
  findAll() {
    return this.localidadService.findAll();
  }

  @Get(':id_localidad')
  findOne(@Param('id_localidad', ParseIntPipe) idLocalidad: number) {
    return this.localidadService.findOne(idLocalidad);
  }

  @Patch(':id_localidad')
  update(@Param('id_localidad', ParseIntPipe) idLocalidad: number, @Body() updateLocalidadDto: UpdateLocalidadDto) {
    return this.localidadService.update(idLocalidad, updateLocalidadDto);
  }

  @Delete(':id_localidad')
  remove(@Param('id_localidad', ParseIntPipe) idLocalidad: number) {
    return this.localidadService.remove(idLocalidad);
  }
}