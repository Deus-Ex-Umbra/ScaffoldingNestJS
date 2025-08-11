import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { PersonaService } from './persona.service';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';

@Controller('personas')
export class PersonaController {
  constructor(private readonly personaService: PersonaService) {}

  @Post()
  create(@Body() createPersonaDto: CreatePersonaDto) {
    return this.personaService.create(createPersonaDto);
  }

  @Get()
  findAll() {
    return this.personaService.findAll();
  }

  @Get(':id_persona')
  findOne(@Param('id_persona', ParseIntPipe) idPersona: number) {
    return this.personaService.findOne(idPersona);
  }

  @Patch(':id_persona')
  update(@Param('id_persona', ParseIntPipe) idPersona: number, @Body() updatePersonaDto: UpdatePersonaDto) {
    return this.personaService.update(idPersona, updatePersonaDto);
  }

  @Delete(':id_persona')
  remove(@Param('id_persona', ParseIntPipe) idPersona: number) {
    return this.personaService.remove(idPersona);
  }
}