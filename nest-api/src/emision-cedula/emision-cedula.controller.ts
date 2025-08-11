import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { EmisionCedulaService } from './emision-cedula.service';
import { CreateEmisionCedulaDto } from './dto/create-emision-cedula.dto';
import { UpdateEmisionCedulaDto } from './dto/update-emision-cedula.dto';

@Controller('emision_cedulas')
export class EmisionCedulaController {
  constructor(private readonly emisionCedulaService: EmisionCedulaService) {}

  @Post()
  create(@Body() createEmisionCedulaDto: CreateEmisionCedulaDto) {
    return this.emisionCedulaService.create(createEmisionCedulaDto);
  }

  @Get()
  findAll() {
    return this.emisionCedulaService.findAll();
  }

  @Get(':id_emision_cedula')
  findOne(@Param('id_emision_cedula', ParseIntPipe) idEmisionCedula: number) {
    return this.emisionCedulaService.findOne(idEmisionCedula);
  }

  @Patch(':id_emision_cedula')
  update(@Param('id_emision_cedula', ParseIntPipe) idEmisionCedula: number, @Body() updateEmisionCedulaDto: UpdateEmisionCedulaDto) {
    return this.emisionCedulaService.update(idEmisionCedula, updateEmisionCedulaDto);
  }

  @Delete(':id_emision_cedula')
  remove(@Param('id_emision_cedula', ParseIntPipe) idEmisionCedula: number) {
    return this.emisionCedulaService.remove(idEmisionCedula);
  }
}