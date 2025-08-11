import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { UniversidadService } from './universidad.service';
import { CreateUniversidadDto } from './dto/create-universidad.dto';
import { UpdateUniversidadDto } from './dto/update-universidad.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('universidades')
export class UniversidadController {
  constructor(private readonly universidadService: UniversidadService) {}

  @Post()
  create(@Body() createUniversidadDto: CreateUniversidadDto) {
    return this.universidadService.create(createUniversidadDto);
  }

  @Get()
  findAll() {
    return this.universidadService.findAll();
  }

  @Get(':id_universidad')
  findOne(@Param('id_universidad', ParseIntPipe) idUniversidad: number) {
    return this.universidadService.findOne(idUniversidad);
  }

  @Patch(':id_universidad')
  update(@Param('id_universidad', ParseIntPipe) idUniversidad: number, @Body() updateUniversidadDto: UpdateUniversidadDto) {
    return this.universidadService.update(idUniversidad, updateUniversidadDto);
  }

  @Delete(':id_universidad')
  remove(@Param('id_universidad', ParseIntPipe) idUniversidad: number) {
    return this.universidadService.remove(idUniversidad);
  }
}