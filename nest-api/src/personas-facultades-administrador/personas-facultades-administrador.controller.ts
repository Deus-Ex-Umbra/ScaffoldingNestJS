import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { PersonasFacultadesAdministradorService } from './personas-facultades-administrador.service';
import { CreatePersonasFacultadesAdministradorDto } from './dto/create-personas-facultades-administrador.dto';
import { UpdatePersonasFacultadesAdministradorDto } from './dto/update-personas-facultades-administrador.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('personas_facultades_administradores')
export class PersonasFacultadesAdministradorController {
  constructor(private readonly personasFacultadesAdministradorService: PersonasFacultadesAdministradorService) {}

  @Post()
  create(@Body() createPersonasFacultadesAdministradorDto: CreatePersonasFacultadesAdministradorDto) {
    return this.personasFacultadesAdministradorService.create(createPersonasFacultadesAdministradorDto);
  }

  @Get()
  findAll() {
    return this.personasFacultadesAdministradorService.findAll();
  }

  @Get(':id_persona_facultad_administrador')
  findOne(@Param('id_persona_facultad_administrador', ParseIntPipe) idPersonaFacultadAdministrador: number) {
    return this.personasFacultadesAdministradorService.findOne(idPersonaFacultadAdministrador);
  }

  @Patch(':id_persona_facultad_administrador')
  update(@Param('id_persona_facultad_administrador', ParseIntPipe) idPersonaFacultadAdministrador: number, @Body() updatePersonasFacultadesAdministradorDto: UpdatePersonasFacultadesAdministradorDto) {
    return this.personasFacultadesAdministradorService.update(idPersonaFacultadAdministrador, updatePersonasFacultadesAdministradorDto);
  }

  @Delete(':id_persona_facultad_administrador')
  remove(@Param('id_persona_facultad_administrador', ParseIntPipe) idPersonaFacultadAdministrador: number) {
    return this.personasFacultadesAdministradorService.remove(idPersonaFacultadAdministrador);
  }
}