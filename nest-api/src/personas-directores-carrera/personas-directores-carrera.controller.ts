import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { PersonasDirectoresCarreraService } from './personas-directores-carrera.service';
import { CreatePersonasDirectoresCarreraDto } from './dto/create-personas-directores-carrera.dto';
import { UpdatePersonasDirectoresCarreraDto } from './dto/update-personas-directores-carrera.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('personas_directores_carreras')
export class PersonasDirectoresCarreraController {
  constructor(private readonly personasDirectoresCarreraService: PersonasDirectoresCarreraService) {}

  @Post()
  create(@Body() createPersonasDirectoresCarreraDto: CreatePersonasDirectoresCarreraDto) {
    return this.personasDirectoresCarreraService.create(createPersonasDirectoresCarreraDto);
  }

  @Get()
  findAll() {
    return this.personasDirectoresCarreraService.findAll();
  }

  @Get(':id_persona_director_carrera')
  findOne(@Param('id_persona_director_carrera', ParseIntPipe) idPersonaDirectorCarrera: number) {
    return this.personasDirectoresCarreraService.findOne(idPersonaDirectorCarrera);
  }

  @Patch(':id_persona_director_carrera')
  update(@Param('id_persona_director_carrera', ParseIntPipe) idPersonaDirectorCarrera: number, @Body() updatePersonasDirectoresCarreraDto: UpdatePersonasDirectoresCarreraDto) {
    return this.personasDirectoresCarreraService.update(idPersonaDirectorCarrera, updatePersonasDirectoresCarreraDto);
  }

  @Delete(':id_persona_director_carrera')
  remove(@Param('id_persona_director_carrera', ParseIntPipe) idPersonaDirectorCarrera: number) {
    return this.personasDirectoresCarreraService.remove(idPersonaDirectorCarrera);
  }
}