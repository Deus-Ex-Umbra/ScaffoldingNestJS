import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { ModalidadService } from './modalidad.service';
import { CreateModalidadDto } from './dto/create-modalidad.dto';
import { UpdateModalidadDto } from './dto/update-modalidad.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('modalidades')
export class ModalidadController {
  constructor(private readonly modalidadService: ModalidadService) {}

  @Post()
  create(@Body() createModalidadDto: CreateModalidadDto) {
    return this.modalidadService.create(createModalidadDto);
  }

  @Get()
  findAll() {
    return this.modalidadService.findAll();
  }

  @Get(':id_modalidad')
  findOne(@Param('id_modalidad', ParseIntPipe) idModalidad: number) {
    return this.modalidadService.findOne(idModalidad);
  }

  @Patch(':id_modalidad')
  update(@Param('id_modalidad', ParseIntPipe) idModalidad: number, @Body() updateModalidadDto: UpdateModalidadDto) {
    return this.modalidadService.update(idModalidad, updateModalidadDto);
  }

  @Delete(':id_modalidad')
  remove(@Param('id_modalidad', ParseIntPipe) idModalidad: number) {
    return this.modalidadService.remove(idModalidad);
  }
}