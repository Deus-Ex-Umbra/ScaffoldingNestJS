import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { TiposPersonaService } from './tipos-persona.service';
import { CreateTiposPersonaDto } from './dto/create-tipos-persona.dto';
import { UpdateTiposPersonaDto } from './dto/update-tipos-persona.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('tipos_personas')
export class TiposPersonaController {
  constructor(private readonly tiposPersonaService: TiposPersonaService) {}

  @Post()
  create(@Body() createTiposPersonaDto: CreateTiposPersonaDto) {
    return this.tiposPersonaService.create(createTiposPersonaDto);
  }

  @Get()
  findAll() {
    return this.tiposPersonaService.findAll();
  }

  @Get(':id_tipo_persona')
  findOne(@Param('id_tipo_persona', ParseIntPipe) idTipoPersona: number) {
    return this.tiposPersonaService.findOne(idTipoPersona);
  }

  @Patch(':id_tipo_persona')
  update(@Param('id_tipo_persona', ParseIntPipe) idTipoPersona: number, @Body() updateTiposPersonaDto: UpdateTiposPersonaDto) {
    return this.tiposPersonaService.update(idTipoPersona, updateTiposPersonaDto);
  }

  @Delete(':id_tipo_persona')
  remove(@Param('id_tipo_persona', ParseIntPipe) idTipoPersona: number) {
    return this.tiposPersonaService.remove(idTipoPersona);
  }
}