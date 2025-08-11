import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { PersonasAlumnosPosgradoService } from './personas-alumnos-posgrado.service';
import { CreatePersonasAlumnosPosgradoDto } from './dto/create-personas-alumnos-posgrado.dto';
import { UpdatePersonasAlumnosPosgradoDto } from './dto/update-personas-alumnos-posgrado.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('personas_alumnos_posgrados')
export class PersonasAlumnosPosgradoController {
  constructor(private readonly personasAlumnosPosgradoService: PersonasAlumnosPosgradoService) {}

  @Post()
  create(@Body() createPersonasAlumnosPosgradoDto: CreatePersonasAlumnosPosgradoDto) {
    return this.personasAlumnosPosgradoService.create(createPersonasAlumnosPosgradoDto);
  }

  @Get()
  findAll() {
    return this.personasAlumnosPosgradoService.findAll();
  }

  @Get(':id_persona_alumno_posgrado')
  findOne(@Param('id_persona_alumno_posgrado', ParseIntPipe) idPersonaAlumnoPosgrado: number) {
    return this.personasAlumnosPosgradoService.findOne(idPersonaAlumnoPosgrado);
  }

  @Patch(':id_persona_alumno_posgrado')
  update(@Param('id_persona_alumno_posgrado', ParseIntPipe) idPersonaAlumnoPosgrado: number, @Body() updatePersonasAlumnosPosgradoDto: UpdatePersonasAlumnosPosgradoDto) {
    return this.personasAlumnosPosgradoService.update(idPersonaAlumnoPosgrado, updatePersonasAlumnosPosgradoDto);
  }

  @Delete(':id_persona_alumno_posgrado')
  remove(@Param('id_persona_alumno_posgrado', ParseIntPipe) idPersonaAlumnoPosgrado: number) {
    return this.personasAlumnosPosgradoService.remove(idPersonaAlumnoPosgrado);
  }
}