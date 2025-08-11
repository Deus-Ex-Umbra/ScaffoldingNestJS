import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { PosgradoMateriaService } from './posgrado-materia.service';
import { CreatePosgradoMateriaDto } from './dto/create-posgrado-materia.dto';
import { UpdatePosgradoMateriaDto } from './dto/update-posgrado-materia.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('posgrado_materias')
export class PosgradoMateriaController {
  constructor(private readonly posgradoMateriaService: PosgradoMateriaService) {}

  @Post()
  create(@Body() createPosgradoMateriaDto: CreatePosgradoMateriaDto) {
    return this.posgradoMateriaService.create(createPosgradoMateriaDto);
  }

  @Get()
  findAll() {
    return this.posgradoMateriaService.findAll();
  }

  @Get(':id_posgrado_materia')
  findOne(@Param('id_posgrado_materia', ParseIntPipe) idPosgradoMateria: number) {
    return this.posgradoMateriaService.findOne(idPosgradoMateria);
  }

  @Patch(':id_posgrado_materia')
  update(@Param('id_posgrado_materia', ParseIntPipe) idPosgradoMateria: number, @Body() updatePosgradoMateriaDto: UpdatePosgradoMateriaDto) {
    return this.posgradoMateriaService.update(idPosgradoMateria, updatePosgradoMateriaDto);
  }

  @Delete(':id_posgrado_materia')
  remove(@Param('id_posgrado_materia', ParseIntPipe) idPosgradoMateria: number) {
    return this.posgradoMateriaService.remove(idPosgradoMateria);
  }
}