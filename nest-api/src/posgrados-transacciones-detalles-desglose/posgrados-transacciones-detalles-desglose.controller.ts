import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { PosgradosTransaccionesDetallesDesgloseService } from './posgrados-transacciones-detalles-desglose.service';
import { CreatePosgradosTransaccionesDetallesDesgloseDto } from './dto/create-posgrados-transacciones-detalles-desglose.dto';
import { UpdatePosgradosTransaccionesDetallesDesgloseDto } from './dto/update-posgrados-transacciones-detalles-desglose.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('posgrados_transacciones_detalles_desglose')
export class PosgradosTransaccionesDetallesDesgloseController {
  constructor(private readonly posgradosTransaccionesDetallesDesgloseService: PosgradosTransaccionesDetallesDesgloseService) {}

  @Post()
  create(@Body() createPosgradosTransaccionesDetallesDesgloseDto: CreatePosgradosTransaccionesDetallesDesgloseDto) {
    return this.posgradosTransaccionesDetallesDesgloseService.create(createPosgradosTransaccionesDetallesDesgloseDto);
  }

  @Get()
  findAll() {
    return this.posgradosTransaccionesDetallesDesgloseService.findAll();
  }

  @Get(':id_transaccion_desglose')
  findOne(@Param('id_transaccion_desglose', ParseIntPipe) idTransaccionDesglose: number) {
    return this.posgradosTransaccionesDetallesDesgloseService.findOne(idTransaccionDesglose);
  }

  @Patch(':id_transaccion_desglose')
  update(@Param('id_transaccion_desglose', ParseIntPipe) idTransaccionDesglose: number, @Body() updatePosgradosTransaccionesDetallesDesgloseDto: UpdatePosgradosTransaccionesDetallesDesgloseDto) {
    return this.posgradosTransaccionesDetallesDesgloseService.update(idTransaccionDesglose, updatePosgradosTransaccionesDetallesDesgloseDto);
  }

  @Delete(':id_transaccion_desglose')
  remove(@Param('id_transaccion_desglose', ParseIntPipe) idTransaccionDesglose: number) {
    return this.posgradosTransaccionesDetallesDesgloseService.remove(idTransaccionDesglose);
  }
}