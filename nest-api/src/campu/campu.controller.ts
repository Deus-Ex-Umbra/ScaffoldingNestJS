import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { CampuService } from './campu.service';
import { CreateCampuDto } from './dto/create-campu.dto';
import { UpdateCampuDto } from './dto/update-campu.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('campus')
export class CampuController {
  constructor(private readonly campuService: CampuService) {}

  @Post()
  create(@Body() createCampuDto: CreateCampuDto) {
    return this.campuService.create(createCampuDto);
  }

  @Get()
  findAll() {
    return this.campuService.findAll();
  }

  @Get(':id_campu')
  findOne(@Param('id_campu', ParseIntPipe) idCampu: number) {
    return this.campuService.findOne(idCampu);
  }

  @Patch(':id_campu')
  update(@Param('id_campu', ParseIntPipe) idCampu: number, @Body() updateCampuDto: UpdateCampuDto) {
    return this.campuService.update(idCampu, updateCampuDto);
  }

  @Delete(':id_campu')
  remove(@Param('id_campu', ParseIntPipe) idCampu: number) {
    return this.campuService.remove(idCampu);
  }
}