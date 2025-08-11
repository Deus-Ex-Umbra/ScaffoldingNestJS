import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { PersonasDecanoService } from './personas-decano.service';
import { CreatePersonasDecanoDto } from './dto/create-personas-decano.dto';
import { UpdatePersonasDecanoDto } from './dto/update-personas-decano.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('personas_decanos')
export class PersonasDecanoController {
  constructor(private readonly personasDecanoService: PersonasDecanoService) {}

  @Post()
  create(@Body() createPersonasDecanoDto: CreatePersonasDecanoDto) {
    return this.personasDecanoService.create(createPersonasDecanoDto);
  }

  @Get()
  findAll() {
    return this.personasDecanoService.findAll();
  }

  @Get(':id_persona_decano')
  findOne(@Param('id_persona_decano', ParseIntPipe) idPersonaDecano: number) {
    return this.personasDecanoService.findOne(idPersonaDecano);
  }

  @Patch(':id_persona_decano')
  update(@Param('id_persona_decano', ParseIntPipe) idPersonaDecano: number, @Body() updatePersonasDecanoDto: UpdatePersonasDecanoDto) {
    return this.personasDecanoService.update(idPersonaDecano, updatePersonasDecanoDto);
  }

  @Delete(':id_persona_decano')
  remove(@Param('id_persona_decano', ParseIntPipe) idPersonaDecano: number) {
    return this.personasDecanoService.remove(idPersonaDecano);
  }
}