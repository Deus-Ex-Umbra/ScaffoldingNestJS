import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { PosgradosProgramaService } from './posgrados-programa.service';
import { CreatePosgradosProgramaDto } from './dto/create-posgrados-programa.dto';
import { UpdatePosgradosProgramaDto } from './dto/update-posgrados-programa.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('posgrados_programas')
export class PosgradosProgramaController {
  constructor(private readonly posgradosProgramaService: PosgradosProgramaService) {}

  @Post()
  create(@Body() createPosgradosProgramaDto: CreatePosgradosProgramaDto) {
    return this.posgradosProgramaService.create(createPosgradosProgramaDto);
  }

  @Get()
  findAll() {
    return this.posgradosProgramaService.findAll();
  }

  @Get(':id_posgrado_programa')
  findOne(@Param('id_posgrado_programa', ParseIntPipe) idPosgradoPrograma: number) {
    return this.posgradosProgramaService.findOne(idPosgradoPrograma);
  }

  @Patch(':id_posgrado_programa')
  update(@Param('id_posgrado_programa', ParseIntPipe) idPosgradoPrograma: number, @Body() updatePosgradosProgramaDto: UpdatePosgradosProgramaDto) {
    return this.posgradosProgramaService.update(idPosgradoPrograma, updatePosgradosProgramaDto);
  }

  @Delete(':id_posgrado_programa')
  remove(@Param('id_posgrado_programa', ParseIntPipe) idPosgradoPrograma: number) {
    return this.posgradosProgramaService.remove(idPosgradoPrograma);
  }
}