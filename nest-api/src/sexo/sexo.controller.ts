import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { SexoService } from './sexo.service';
import { CreateSexoDto } from './dto/create-sexo.dto';
import { UpdateSexoDto } from './dto/update-sexo.dto';

@Controller('sexos')
export class SexoController {
  constructor(private readonly sexoService: SexoService) {}

  @Post()
  create(@Body() createSexoDto: CreateSexoDto) {
    return this.sexoService.create(createSexoDto);
  }

  @Get()
  findAll() {
    return this.sexoService.findAll();
  }

  @Get(':id_sexo')
  findOne(@Param('id_sexo', ParseIntPipe) idSexo: number) {
    return this.sexoService.findOne(idSexo);
  }

  @Patch(':id_sexo')
  update(@Param('id_sexo', ParseIntPipe) idSexo: number, @Body() updateSexoDto: UpdateSexoDto) {
    return this.sexoService.update(idSexo, updateSexoDto);
  }

  @Delete(':id_sexo')
  remove(@Param('id_sexo', ParseIntPipe) idSexo: number) {
    return this.sexoService.remove(idSexo);
  }
}