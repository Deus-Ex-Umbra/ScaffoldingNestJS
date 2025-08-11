import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { ConfiguracionService } from './configuracion.service';
import { CreateConfiguracionDto } from './dto/create-configuracion.dto';
import { UpdateConfiguracionDto } from './dto/update-configuracion.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('configuraciones')
export class ConfiguracionController {
  constructor(private readonly configuracionService: ConfiguracionService) {}

  @Post()
  create(@Body() createConfiguracionDto: CreateConfiguracionDto) {
    return this.configuracionService.create(createConfiguracionDto);
  }

  @Get()
  findAll() {
    return this.configuracionService.findAll();
  }

  @Get(':id_configuracion')
  findOne(@Param('id_configuracion', ParseIntPipe) idConfiguracion: number) {
    return this.configuracionService.findOne(idConfiguracion);
  }

  @Patch(':id_configuracion')
  update(@Param('id_configuracion', ParseIntPipe) idConfiguracion: number, @Body() updateConfiguracionDto: UpdateConfiguracionDto) {
    return this.configuracionService.update(idConfiguracion, updateConfiguracionDto);
  }

  @Delete(':id_configuracion')
  remove(@Param('id_configuracion', ParseIntPipe) idConfiguracion: number) {
    return this.configuracionService.remove(idConfiguracion);
  }
}