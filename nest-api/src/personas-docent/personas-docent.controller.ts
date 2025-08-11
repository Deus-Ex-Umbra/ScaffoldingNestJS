import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { PersonasDocentService } from './personas-docent.service';
import { CreatePersonasDocentDto } from './dto/create-personas-docent.dto';
import { UpdatePersonasDocentDto } from './dto/update-personas-docent.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('personas_docentes')
export class PersonasDocentController {
  constructor(private readonly personasDocentService: PersonasDocentService) {}

  @Post()
  create(@Body() createPersonasDocentDto: CreatePersonasDocentDto) {
    return this.personasDocentService.create(createPersonasDocentDto);
  }

  @Get()
  findAll() {
    return this.personasDocentService.findAll();
  }

  @Get(':id_persona_docente')
  findOne(@Param('id_persona_docente', ParseIntPipe) idPersonaDocente: number) {
    return this.personasDocentService.findOne(idPersonaDocente);
  }

  @Patch(':id_persona_docente')
  update(@Param('id_persona_docente', ParseIntPipe) idPersonaDocente: number, @Body() updatePersonasDocentDto: UpdatePersonasDocentDto) {
    return this.personasDocentService.update(idPersonaDocente, updatePersonasDocentDto);
  }

  @Delete(':id_persona_docente')
  remove(@Param('id_persona_docente', ParseIntPipe) idPersonaDocente: number) {
    return this.personasDocentService.remove(idPersonaDocente);
  }
}