import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { PosgradosContratosDetallService } from './posgrados-contratos-detall.service';
import { CreatePosgradosContratosDetallDto } from './dto/create-posgrados-contratos-detall.dto';
import { UpdatePosgradosContratosDetallDto } from './dto/update-posgrados-contratos-detall.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('posgrados_contratos_detalles')
export class PosgradosContratosDetallController {
  constructor(private readonly posgradosContratosDetallService: PosgradosContratosDetallService) {}

  @Post()
  create(@Body() createPosgradosContratosDetallDto: CreatePosgradosContratosDetallDto) {
    return this.posgradosContratosDetallService.create(createPosgradosContratosDetallDto);
  }

  @Get()
  findAll() {
    return this.posgradosContratosDetallService.findAll();
  }

  @Get(':id_posgrado_contrato_detalle')
  findOne(@Param('id_posgrado_contrato_detalle', ParseIntPipe) idPosgradoContratoDetalle: number) {
    return this.posgradosContratosDetallService.findOne(idPosgradoContratoDetalle);
  }

  @Patch(':id_posgrado_contrato_detalle')
  update(@Param('id_posgrado_contrato_detalle', ParseIntPipe) idPosgradoContratoDetalle: number, @Body() updatePosgradosContratosDetallDto: UpdatePosgradosContratosDetallDto) {
    return this.posgradosContratosDetallService.update(idPosgradoContratoDetalle, updatePosgradosContratosDetallDto);
  }

  @Delete(':id_posgrado_contrato_detalle')
  remove(@Param('id_posgrado_contrato_detalle', ParseIntPipe) idPosgradoContratoDetalle: number) {
    return this.posgradosContratosDetallService.remove(idPosgradoContratoDetalle);
  }
}