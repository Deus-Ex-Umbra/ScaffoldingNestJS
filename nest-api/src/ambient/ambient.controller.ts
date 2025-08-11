import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { AmbientService } from './ambient.service';
import { CreateAmbientDto } from './dto/create-ambient.dto';
import { UpdateAmbientDto } from './dto/update-ambient.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('ambientes')
export class AmbientController {
  constructor(private readonly ambientService: AmbientService) {}

  @Post()
  create(@Body() createAmbientDto: CreateAmbientDto) {
    return this.ambientService.create(createAmbientDto);
  }

  @Get()
  findAll() {
    return this.ambientService.findAll();
  }

  @Get(':id_ambiente')
  findOne(@Param('id_ambiente', ParseIntPipe) idAmbiente: number) {
    return this.ambientService.findOne(idAmbiente);
  }

  @Patch(':id_ambiente')
  update(@Param('id_ambiente', ParseIntPipe) idAmbiente: number, @Body() updateAmbientDto: UpdateAmbientDto) {
    return this.ambientService.update(idAmbiente, updateAmbientDto);
  }

  @Delete(':id_ambiente')
  remove(@Param('id_ambiente', ParseIntPipe) idAmbiente: number) {
    return this.ambientService.remove(idAmbiente);
  }
}