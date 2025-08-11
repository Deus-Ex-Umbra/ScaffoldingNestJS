import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { ProvinciaService } from './provincia.service';
import { CreateProvinciaDto } from './dto/create-provincia.dto';
import { UpdateProvinciaDto } from './dto/update-provincia.dto';

@Controller('provincias')
export class ProvinciaController {
  constructor(private readonly provinciaService: ProvinciaService) {}

  @Post()
  create(@Body() createProvinciaDto: CreateProvinciaDto) {
    return this.provinciaService.create(createProvinciaDto);
  }

  @Get()
  findAll() {
    return this.provinciaService.findAll();
  }

  @Get(':id_provincia')
  findOne(@Param('id_provincia', ParseIntPipe) idProvincia: number) {
    return this.provinciaService.findOne(idProvincia);
  }

  @Patch(':id_provincia')
  update(@Param('id_provincia', ParseIntPipe) idProvincia: number, @Body() updateProvinciaDto: UpdateProvinciaDto) {
    return this.provinciaService.update(idProvincia, updateProvinciaDto);
  }

  @Delete(':id_provincia')
  remove(@Param('id_provincia', ParseIntPipe) idProvincia: number) {
    return this.provinciaService.remove(idProvincia);
  }
}