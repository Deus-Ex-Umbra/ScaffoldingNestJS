import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { GruposSanguineoService } from './grupos-sanguineo.service';
import { CreateGruposSanguineoDto } from './dto/create-grupos-sanguineo.dto';
import { UpdateGruposSanguineoDto } from './dto/update-grupos-sanguineo.dto';

@Controller('grupos_sanguineos')
export class GruposSanguineoController {
  constructor(private readonly gruposSanguineoService: GruposSanguineoService) {}

  @Post()
  create(@Body() createGruposSanguineoDto: CreateGruposSanguineoDto) {
    return this.gruposSanguineoService.create(createGruposSanguineoDto);
  }

  @Get()
  findAll() {
    return this.gruposSanguineoService.findAll();
  }

  @Get(':id_grupo_sanguineo')
  findOne(@Param('id_grupo_sanguineo', ParseIntPipe) idGrupoSanguineo: number) {
    return this.gruposSanguineoService.findOne(idGrupoSanguineo);
  }

  @Patch(':id_grupo_sanguineo')
  update(@Param('id_grupo_sanguineo', ParseIntPipe) idGrupoSanguineo: number, @Body() updateGruposSanguineoDto: UpdateGruposSanguineoDto) {
    return this.gruposSanguineoService.update(idGrupoSanguineo, updateGruposSanguineoDto);
  }

  @Delete(':id_grupo_sanguineo')
  remove(@Param('id_grupo_sanguineo', ParseIntPipe) idGrupoSanguineo: number) {
    return this.gruposSanguineoService.remove(idGrupoSanguineo);
  }
}