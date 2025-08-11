import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { DepartamentoService } from './departamento.service';
import { CreateDepartamentoDto } from './dto/create-departamento.dto';
import { UpdateDepartamentoDto } from './dto/update-departamento.dto';

@Controller('departamentos')
export class DepartamentoController {
  constructor(private readonly departamentoService: DepartamentoService) {}

  @Post()
  create(@Body() createDepartamentoDto: CreateDepartamentoDto) {
    return this.departamentoService.create(createDepartamentoDto);
  }

  @Get()
  findAll() {
    return this.departamentoService.findAll();
  }

  @Get(':id_departamento')
  findOne(@Param('id_departamento', ParseIntPipe) idDepartamento: number) {
    return this.departamentoService.findOne(idDepartamento);
  }

  @Patch(':id_departamento')
  update(@Param('id_departamento', ParseIntPipe) idDepartamento: number, @Body() updateDepartamentoDto: UpdateDepartamentoDto) {
    return this.departamentoService.update(idDepartamento, updateDepartamentoDto);
  }

  @Delete(':id_departamento')
  remove(@Param('id_departamento', ParseIntPipe) idDepartamento: number) {
    return this.departamentoService.remove(idDepartamento);
  }
}