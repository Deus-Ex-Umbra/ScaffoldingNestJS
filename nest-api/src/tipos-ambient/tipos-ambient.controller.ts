import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { TiposAmbientService } from './tipos-ambient.service';
import { CreateTiposAmbientDto } from './dto/create-tipos-ambient.dto';
import { UpdateTiposAmbientDto } from './dto/update-tipos-ambient.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('tipos_ambientes')
export class TiposAmbientController {
  constructor(private readonly tiposAmbientService: TiposAmbientService) {}

  @Post()
  create(@Body() createTiposAmbientDto: CreateTiposAmbientDto) {
    return this.tiposAmbientService.create(createTiposAmbientDto);
  }

  @Get()
  findAll() {
    return this.tiposAmbientService.findAll();
  }

  @Get(':id_tipo_ambiente')
  findOne(@Param('id_tipo_ambiente', ParseIntPipe) idTipoAmbiente: number) {
    return this.tiposAmbientService.findOne(idTipoAmbiente);
  }

  @Patch(':id_tipo_ambiente')
  update(@Param('id_tipo_ambiente', ParseIntPipe) idTipoAmbiente: number, @Body() updateTiposAmbientDto: UpdateTiposAmbientDto) {
    return this.tiposAmbientService.update(idTipoAmbiente, updateTiposAmbientDto);
  }

  @Delete(':id_tipo_ambiente')
  remove(@Param('id_tipo_ambiente', ParseIntPipe) idTipoAmbiente: number) {
    return this.tiposAmbientService.remove(idTipoAmbiente);
  }
}