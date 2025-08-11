import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { PosgradoNivelService } from './posgrado-nivel.service';
import { CreatePosgradoNivelDto } from './dto/create-posgrado-nivel.dto';
import { UpdatePosgradoNivelDto } from './dto/update-posgrado-nivel.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('posgrado_niveles')
export class PosgradoNivelController {
  constructor(private readonly posgradoNivelService: PosgradoNivelService) {}

  @Post()
  create(@Body() createPosgradoNivelDto: CreatePosgradoNivelDto) {
    return this.posgradoNivelService.create(createPosgradoNivelDto);
  }

  @Get()
  findAll() {
    return this.posgradoNivelService.findAll();
  }

  @Get(':id_posgrado_nivel')
  findOne(@Param('id_posgrado_nivel', ParseIntPipe) idPosgradoNivel: number) {
    return this.posgradoNivelService.findOne(idPosgradoNivel);
  }

  @Patch(':id_posgrado_nivel')
  update(@Param('id_posgrado_nivel', ParseIntPipe) idPosgradoNivel: number, @Body() updatePosgradoNivelDto: UpdatePosgradoNivelDto) {
    return this.posgradoNivelService.update(idPosgradoNivel, updatePosgradoNivelDto);
  }

  @Delete(':id_posgrado_nivel')
  remove(@Param('id_posgrado_nivel', ParseIntPipe) idPosgradoNivel: number) {
    return this.posgradoNivelService.remove(idPosgradoNivel);
  }
}