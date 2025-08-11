import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { PersonasAlumnoService } from './personas-alumno.service';
import { CreatePersonasAlumnoDto } from './dto/create-personas-alumno.dto';
import { UpdatePersonasAlumnoDto } from './dto/update-personas-alumno.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('personas_alumnos')
export class PersonasAlumnoController {
  constructor(private readonly personasAlumnoService: PersonasAlumnoService) {}

  @Post()
  create(@Body() createPersonasAlumnoDto: CreatePersonasAlumnoDto) {
    return this.personasAlumnoService.create(createPersonasAlumnoDto);
  }

  @Get()
  findAll() {
    return this.personasAlumnoService.findAll();
  }

  @Get(':id_persona_alumno')
  findOne(@Param('id_persona_alumno', ParseIntPipe) idPersonaAlumno: number) {
    return this.personasAlumnoService.findOne(idPersonaAlumno);
  }

  @Patch(':id_persona_alumno')
  update(@Param('id_persona_alumno', ParseIntPipe) idPersonaAlumno: number, @Body() updatePersonasAlumnoDto: UpdatePersonasAlumnoDto) {
    return this.personasAlumnoService.update(idPersonaAlumno, updatePersonasAlumnoDto);
  }

  @Delete(':id_persona_alumno')
  remove(@Param('id_persona_alumno', ParseIntPipe) idPersonaAlumno: number) {
    return this.personasAlumnoService.remove(idPersonaAlumno);
  }
}