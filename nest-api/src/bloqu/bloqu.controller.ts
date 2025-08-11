import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { BloquService } from './bloqu.service';
import { CreateBloquDto } from './dto/create-bloqu.dto';
import { UpdateBloquDto } from './dto/update-bloqu.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('bloques')
export class BloquController {
  constructor(private readonly bloquService: BloquService) {}

  @Post()
  create(@Body() createBloquDto: CreateBloquDto) {
    return this.bloquService.create(createBloquDto);
  }

  @Get()
  findAll() {
    return this.bloquService.findAll();
  }

  @Get(':id_bloque')
  findOne(@Param('id_bloque', ParseIntPipe) idBloque: number) {
    return this.bloquService.findOne(idBloque);
  }

  @Patch(':id_bloque')
  update(@Param('id_bloque', ParseIntPipe) idBloque: number, @Body() updateBloquDto: UpdateBloquDto) {
    return this.bloquService.update(idBloque, updateBloquDto);
  }

  @Delete(':id_bloque')
  remove(@Param('id_bloque', ParseIntPipe) idBloque: number) {
    return this.bloquService.remove(idBloque);
  }
}