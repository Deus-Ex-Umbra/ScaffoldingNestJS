import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { PersonasDirectoresPosgradoService } from './personas-directores-posgrado.service';
import { CreatePersonasDirectoresPosgradoDto } from './dto/create-personas-directores-posgrado.dto';
import { UpdatePersonasDirectoresPosgradoDto } from './dto/update-personas-directores-posgrado.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('personas_directores_posgrados')
export class PersonasDirectoresPosgradoController {
  constructor(private readonly personasDirectoresPosgradoService: PersonasDirectoresPosgradoService) {}

  @Post()
  create(@Body() createPersonasDirectoresPosgradoDto: CreatePersonasDirectoresPosgradoDto) {
    return this.personasDirectoresPosgradoService.create(createPersonasDirectoresPosgradoDto);
  }

  @Get()
  findAll() {
    return this.personasDirectoresPosgradoService.findAll();
  }

  @Get(':id_persona_director_posgrado')
  findOne(@Param('id_persona_director_posgrado', ParseIntPipe) idPersonaDirectorPosgrado: number) {
    return this.personasDirectoresPosgradoService.findOne(idPersonaDirectorPosgrado);
  }

  @Patch(':id_persona_director_posgrado')
  update(@Param('id_persona_director_posgrado', ParseIntPipe) idPersonaDirectorPosgrado: number, @Body() updatePersonasDirectoresPosgradoDto: UpdatePersonasDirectoresPosgradoDto) {
    return this.personasDirectoresPosgradoService.update(idPersonaDirectorPosgrado, updatePersonasDirectoresPosgradoDto);
  }

  @Delete(':id_persona_director_posgrado')
  remove(@Param('id_persona_director_posgrado', ParseIntPipe) idPersonaDirectorPosgrado: number) {
    return this.personasDirectoresPosgradoService.remove(idPersonaDirectorPosgrado);
  }
}