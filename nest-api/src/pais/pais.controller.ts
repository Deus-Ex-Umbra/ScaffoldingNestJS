import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { PaisService } from './pais.service';
import { CreatePaisDto } from './dto/create-pais.dto';
import { UpdatePaisDto } from './dto/update-pais.dto';

@Controller('paises')
export class PaisController {
  constructor(private readonly paisService: PaisService) {}

  @Post()
  create(@Body() createPaisDto: CreatePaisDto) {
    return this.paisService.create(createPaisDto);
  }

  @Get()
  findAll() {
    return this.paisService.findAll();
  }

  @Get(':id_pais')
  findOne(@Param('id_pais', ParseIntPipe) idPais: number) {
    return this.paisService.findOne(idPais);
  }

  @Patch(':id_pais')
  update(@Param('id_pais', ParseIntPipe) idPais: number, @Body() updatePaisDto: UpdatePaisDto) {
    return this.paisService.update(idPais, updatePaisDto);
  }

  @Delete(':id_pais')
  remove(@Param('id_pais', ParseIntPipe) idPais: number) {
    return this.paisService.remove(idPais);
  }
}