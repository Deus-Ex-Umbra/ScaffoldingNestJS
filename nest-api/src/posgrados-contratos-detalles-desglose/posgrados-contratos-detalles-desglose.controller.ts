import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { PosgradosContratosDetallesDesgloseService } from './posgrados-contratos-detalles-desglose.service';
import { CreatePosgradosContratosDetallesDesgloseDto } from './dto/create-posgrados-contratos-detalles-desglose.dto';
import { UpdatePosgradosContratosDetallesDesgloseDto } from './dto/update-posgrados-contratos-detalles-desglose.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('posgrados_contratos_detalles_desglose')
export class PosgradosContratosDetallesDesgloseController {
  constructor(private readonly posgradosContratosDetallesDesgloseService: PosgradosContratosDetallesDesgloseService) {}

  @Post()
  create(@Body() createPosgradosContratosDetallesDesgloseDto: CreatePosgradosContratosDetallesDesgloseDto) {
    return this.posgradosContratosDetallesDesgloseService.create(createPosgradosContratosDetallesDesgloseDto);
  }

  @Get()
  findAll() {
    return this.posgradosContratosDetallesDesgloseService.findAll();
  }

  @Get(':id_posgrado_desglose')
  findOne(@Param('id_posgrado_desglose', ParseIntPipe) idPosgradoDesglose: number) {
    return this.posgradosContratosDetallesDesgloseService.findOne(idPosgradoDesglose);
  }

  @Patch(':id_posgrado_desglose')
  update(@Param('id_posgrado_desglose', ParseIntPipe) idPosgradoDesglose: number, @Body() updatePosgradosContratosDetallesDesgloseDto: UpdatePosgradosContratosDetallesDesgloseDto) {
    return this.posgradosContratosDetallesDesgloseService.update(idPosgradoDesglose, updatePosgradosContratosDetallesDesgloseDto);
  }

  @Delete(':id_posgrado_desglose')
  remove(@Param('id_posgrado_desglose', ParseIntPipe) idPosgradoDesglose: number) {
    return this.posgradosContratosDetallesDesgloseService.remove(idPosgradoDesglose);
  }
}