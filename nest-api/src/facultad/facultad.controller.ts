import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { FacultadService } from './facultad.service';
import { CreateFacultadDto } from './dto/create-facultad.dto';
import { UpdateFacultadDto } from './dto/update-facultad.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('facultades')
export class FacultadController {
  constructor(private readonly facultadService: FacultadService) {}

  @Post()
  create(@Body() createFacultadDto: CreateFacultadDto) {
    return this.facultadService.create(createFacultadDto);
  }

  @Get()
  findAll() {
    return this.facultadService.findAll();
  }

  @Get(':id_facultad')
  findOne(@Param('id_facultad', ParseIntPipe) idFacultad: number) {
    return this.facultadService.findOne(idFacultad);
  }

  @Patch(':id_facultad')
  update(@Param('id_facultad', ParseIntPipe) idFacultad: number, @Body() updateFacultadDto: UpdateFacultadDto) {
    return this.facultadService.update(idFacultad, updateFacultadDto);
  }

  @Delete(':id_facultad')
  remove(@Param('id_facultad', ParseIntPipe) idFacultad: number) {
    return this.facultadService.remove(idFacultad);
  }
}