import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { PosgradosTransaccionesDetallService } from './posgrados-transacciones-detall.service';
import { CreatePosgradosTransaccionesDetallDto } from './dto/create-posgrados-transacciones-detall.dto';
import { UpdatePosgradosTransaccionesDetallDto } from './dto/update-posgrados-transacciones-detall.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('posgrados_transacciones_detalles')
export class PosgradosTransaccionesDetallController {
  constructor(private readonly posgradosTransaccionesDetallService: PosgradosTransaccionesDetallService) {}

  @Post()
  create(@Body() createPosgradosTransaccionesDetallDto: CreatePosgradosTransaccionesDetallDto) {
    return this.posgradosTransaccionesDetallService.create(createPosgradosTransaccionesDetallDto);
  }

  @Get()
  findAll() {
    return this.posgradosTransaccionesDetallService.findAll();
  }

  @Get(':id_posgrado_transaccion_detalle')
  findOne(@Param('id_posgrado_transaccion_detalle', ParseIntPipe) idPosgradoTransaccionDetalle: number) {
    return this.posgradosTransaccionesDetallService.findOne(idPosgradoTransaccionDetalle);
  }

  @Patch(':id_posgrado_transaccion_detalle')
  update(@Param('id_posgrado_transaccion_detalle', ParseIntPipe) idPosgradoTransaccionDetalle: number, @Body() updatePosgradosTransaccionesDetallDto: UpdatePosgradosTransaccionesDetallDto) {
    return this.posgradosTransaccionesDetallService.update(idPosgradoTransaccionDetalle, updatePosgradosTransaccionesDetallDto);
  }

  @Delete(':id_posgrado_transaccion_detalle')
  remove(@Param('id_posgrado_transaccion_detalle', ParseIntPipe) idPosgradoTransaccionDetalle: number) {
    return this.posgradosTransaccionesDetallService.remove(idPosgradoTransaccionDetalle);
  }
}