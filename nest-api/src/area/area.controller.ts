import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { AreaService } from './area.service';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('areas')
export class AreaController {
  constructor(private readonly areaService: AreaService) {}

  @Post()
  create(@Body() createAreaDto: CreateAreaDto) {
    return this.areaService.create(createAreaDto);
  }

  @Get()
  findAll() {
    return this.areaService.findAll();
  }

  @Get(':id_area')
  findOne(@Param('id_area', ParseIntPipe) idArea: number) {
    return this.areaService.findOne(idArea);
  }

  @Patch(':id_area')
  update(@Param('id_area', ParseIntPipe) idArea: number, @Body() updateAreaDto: UpdateAreaDto) {
    return this.areaService.update(idArea, updateAreaDto);
  }

  @Delete(':id_area')
  remove(@Param('id_area', ParseIntPipe) idArea: number) {
    return this.areaService.remove(idArea);
  }
}