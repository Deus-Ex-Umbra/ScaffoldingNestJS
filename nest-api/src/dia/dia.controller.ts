import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { DiaService } from './dia.service';
import { CreateDiaDto } from './dto/create-dia.dto';
import { UpdateDiaDto } from './dto/update-dia.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('dias')
export class DiaController {
  constructor(private readonly diaService: DiaService) {}

  @Post()
  create(@Body() createDiaDto: CreateDiaDto) {
    return this.diaService.create(createDiaDto);
  }

  @Get()
  findAll() {
    return this.diaService.findAll();
  }

  @Get(':id_dia')
  findOne(@Param('id_dia', ParseIntPipe) idDia: number) {
    return this.diaService.findOne(idDia);
  }

  @Patch(':id_dia')
  update(@Param('id_dia', ParseIntPipe) idDia: number, @Body() updateDiaDto: UpdateDiaDto) {
    return this.diaService.update(idDia, updateDiaDto);
  }

  @Delete(':id_dia')
  remove(@Param('id_dia', ParseIntPipe) idDia: number) {
    return this.diaService.remove(idDia);
  }
}