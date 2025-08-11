import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { PisosBloquService } from './pisos-bloqu.service';
import { CreatePisosBloquDto } from './dto/create-pisos-bloqu.dto';
import { UpdatePisosBloquDto } from './dto/update-pisos-bloqu.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('pisos_bloques')
export class PisosBloquController {
  constructor(private readonly pisosBloquService: PisosBloquService) {}

  @Post()
  create(@Body() createPisosBloquDto: CreatePisosBloquDto) {
    return this.pisosBloquService.create(createPisosBloquDto);
  }

  @Get()
  findAll() {
    return this.pisosBloquService.findAll();
  }

  @Get(':id_piso_bloque')
  findOne(@Param('id_piso_bloque', ParseIntPipe) idPisoBloque: number) {
    return this.pisosBloquService.findOne(idPisoBloque);
  }

  @Patch(':id_piso_bloque')
  update(@Param('id_piso_bloque', ParseIntPipe) idPisoBloque: number, @Body() updatePisosBloquDto: UpdatePisosBloquDto) {
    return this.pisosBloquService.update(idPisoBloque, updatePisosBloquDto);
  }

  @Delete(':id_piso_bloque')
  remove(@Param('id_piso_bloque', ParseIntPipe) idPisoBloque: number) {
    return this.pisosBloquService.remove(idPisoBloque);
  }
}