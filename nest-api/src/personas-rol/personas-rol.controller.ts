import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { PersonasRolService } from './personas-rol.service';
import { CreatePersonasRolDto } from './dto/create-personas-rol.dto';
import { UpdatePersonasRolDto } from './dto/update-personas-rol.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('personas_roles')
export class PersonasRolController {
  constructor(private readonly personasRolService: PersonasRolService) {}

  @Post()
  create(@Body() createPersonasRolDto: CreatePersonasRolDto) {
    return this.personasRolService.create(createPersonasRolDto);
  }

  @Get()
  findAll() {
    return this.personasRolService.findAll();
  }

  @Get(':id_persona_rol')
  findOne(@Param('id_persona_rol', ParseIntPipe) idPersonaRol: number) {
    return this.personasRolService.findOne(idPersonaRol);
  }

  @Patch(':id_persona_rol')
  update(@Param('id_persona_rol', ParseIntPipe) idPersonaRol: number, @Body() updatePersonasRolDto: UpdatePersonasRolDto) {
    return this.personasRolService.update(idPersonaRol, updatePersonasRolDto);
  }

  @Delete(':id_persona_rol')
  remove(@Param('id_persona_rol', ParseIntPipe) idPersonaRol: number) {
    return this.personasRolService.remove(idPersonaRol);
  }
}