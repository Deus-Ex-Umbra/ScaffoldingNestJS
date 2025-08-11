import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { ModuloService } from './modulo.service';
import { CreateModuloDto } from './dto/create-modulo.dto';
import { UpdateModuloDto } from './dto/update-modulo.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('modulos')
export class ModuloController {
  constructor(private readonly moduloService: ModuloService) {}

  @Post()
  create(@Body() createModuloDto: CreateModuloDto) {
    return this.moduloService.create(createModuloDto);
  }

  @Get()
  findAll() {
    return this.moduloService.findAll();
  }

  @Get(':id_modulo')
  findOne(@Param('id_modulo', ParseIntPipe) idModulo: number) {
    return this.moduloService.findOne(idModulo);
  }

  @Patch(':id_modulo')
  update(@Param('id_modulo', ParseIntPipe) idModulo: number, @Body() updateModuloDto: UpdateModuloDto) {
    return this.moduloService.update(idModulo, updateModuloDto);
  }

  @Delete(':id_modulo')
  remove(@Param('id_modulo', ParseIntPipe) idModulo: number) {
    return this.moduloService.remove(idModulo);
  }
}