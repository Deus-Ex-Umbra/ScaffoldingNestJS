import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { SedService } from './sed.service';
import { CreateSedDto } from './dto/create-sed.dto';
import { UpdateSedDto } from './dto/update-sed.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('sedes')
export class SedController {
  constructor(private readonly sedService: SedService) {}

  @Post()
  create(@Body() createSedDto: CreateSedDto) {
    return this.sedService.create(createSedDto);
  }

  @Get()
  findAll() {
    return this.sedService.findAll();
  }

  @Get(':id_sede')
  findOne(@Param('id_sede', ParseIntPipe) idSede: number) {
    return this.sedService.findOne(idSede);
  }

  @Patch(':id_sede')
  update(@Param('id_sede', ParseIntPipe) idSede: number, @Body() updateSedDto: UpdateSedDto) {
    return this.sedService.update(idSede, updateSedDto);
  }

  @Delete(':id_sede')
  remove(@Param('id_sede', ParseIntPipe) idSede: number) {
    return this.sedService.remove(idSede);
  }
}