import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { EdificioService } from './edificio.service';
import { CreateEdificioDto } from './dto/create-edificio.dto';
import { UpdateEdificioDto } from './dto/update-edificio.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('edificios')
export class EdificioController {
  constructor(private readonly edificioService: EdificioService) {}

  @Post()
  create(@Body() createEdificioDto: CreateEdificioDto) {
    return this.edificioService.create(createEdificioDto);
  }

  @Get()
  findAll() {
    return this.edificioService.findAll();
  }

  @Get(':id_edificio')
  findOne(@Param('id_edificio', ParseIntPipe) idEdificio: number) {
    return this.edificioService.findOne(idEdificio);
  }

  @Patch(':id_edificio')
  update(@Param('id_edificio', ParseIntPipe) idEdificio: number, @Body() updateEdificioDto: UpdateEdificioDto) {
    return this.edificioService.update(idEdificio, updateEdificioDto);
  }

  @Delete(':id_edificio')
  remove(@Param('id_edificio', ParseIntPipe) idEdificio: number) {
    return this.edificioService.remove(idEdificio);
  }
}