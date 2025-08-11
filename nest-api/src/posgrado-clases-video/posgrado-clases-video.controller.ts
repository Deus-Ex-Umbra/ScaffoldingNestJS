import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { PosgradoClasesVideoService } from './posgrado-clases-video.service';
import { CreatePosgradoClasesVideoDto } from './dto/create-posgrado-clases-video.dto';
import { UpdatePosgradoClasesVideoDto } from './dto/update-posgrado-clases-video.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('posgrado_clases_videos')
export class PosgradoClasesVideoController {
  constructor(private readonly posgradoClasesVideoService: PosgradoClasesVideoService) {}

  @Post()
  create(@Body() createPosgradoClasesVideoDto: CreatePosgradoClasesVideoDto) {
    return this.posgradoClasesVideoService.create(createPosgradoClasesVideoDto);
  }

  @Get()
  findAll() {
    return this.posgradoClasesVideoService.findAll();
  }

  @Get(':id_posgrado_clase_video')
  findOne(@Param('id_posgrado_clase_video', ParseIntPipe) idPosgradoClaseVideo: number) {
    return this.posgradoClasesVideoService.findOne(idPosgradoClaseVideo);
  }

  @Patch(':id_posgrado_clase_video')
  update(@Param('id_posgrado_clase_video', ParseIntPipe) idPosgradoClaseVideo: number, @Body() updatePosgradoClasesVideoDto: UpdatePosgradoClasesVideoDto) {
    return this.posgradoClasesVideoService.update(idPosgradoClaseVideo, updatePosgradoClasesVideoDto);
  }

  @Delete(':id_posgrado_clase_video')
  remove(@Param('id_posgrado_clase_video', ParseIntPipe) idPosgradoClaseVideo: number) {
    return this.posgradoClasesVideoService.remove(idPosgradoClaseVideo);
  }
}