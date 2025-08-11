import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { PersonasAdministrativoService } from './personas-administrativo.service';
import { CreatePersonasAdministrativoDto } from './dto/create-personas-administrativo.dto';
import { UpdatePersonasAdministrativoDto } from './dto/update-personas-administrativo.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('personas_administrativos')
export class PersonasAdministrativoController {
  constructor(private readonly personasAdministrativoService: PersonasAdministrativoService) {}

  @Post()
  create(@Body() createPersonasAdministrativoDto: CreatePersonasAdministrativoDto) {
    return this.personasAdministrativoService.create(createPersonasAdministrativoDto);
  }

  @Get()
  findAll() {
    return this.personasAdministrativoService.findAll();
  }

  @Get(':id_persona_administrativo')
  findOne(@Param('id_persona_administrativo', ParseIntPipe) idPersonaAdministrativo: number) {
    return this.personasAdministrativoService.findOne(idPersonaAdministrativo);
  }

  @Patch(':id_persona_administrativo')
  update(@Param('id_persona_administrativo', ParseIntPipe) idPersonaAdministrativo: number, @Body() updatePersonasAdministrativoDto: UpdatePersonasAdministrativoDto) {
    return this.personasAdministrativoService.update(idPersonaAdministrativo, updatePersonasAdministrativoDto);
  }

  @Delete(':id_persona_administrativo')
  remove(@Param('id_persona_administrativo', ParseIntPipe) idPersonaAdministrativo: number) {
    return this.personasAdministrativoService.remove(idPersonaAdministrativo);
  }
}