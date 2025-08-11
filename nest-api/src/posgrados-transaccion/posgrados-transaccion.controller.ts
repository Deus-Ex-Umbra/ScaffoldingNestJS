import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { PosgradosTransaccionService } from './posgrados-transaccion.service';
import { CreatePosgradosTransaccionDto } from './dto/create-posgrados-transaccion.dto';
import { UpdatePosgradosTransaccionDto } from './dto/update-posgrados-transaccion.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('posgrados_transacciones')
export class PosgradosTransaccionController {
  constructor(private readonly posgradosTransaccionService: PosgradosTransaccionService) {}

  @Post()
  create(@Body() createPosgradosTransaccionDto: CreatePosgradosTransaccionDto) {
    return this.posgradosTransaccionService.create(createPosgradosTransaccionDto);
  }

  @Get()
  findAll() {
    return this.posgradosTransaccionService.findAll();
  }

  @Get(':id_posgrado_transaccion')
  findOne(@Param('id_posgrado_transaccion', ParseIntPipe) idPosgradoTransaccion: number) {
    return this.posgradosTransaccionService.findOne(idPosgradoTransaccion);
  }

  @Patch(':id_posgrado_transaccion')
  update(@Param('id_posgrado_transaccion', ParseIntPipe) idPosgradoTransaccion: number, @Body() updatePosgradosTransaccionDto: UpdatePosgradosTransaccionDto) {
    return this.posgradosTransaccionService.update(idPosgradoTransaccion, updatePosgradosTransaccionDto);
  }

  @Delete(':id_posgrado_transaccion')
  remove(@Param('id_posgrado_transaccion', ParseIntPipe) idPosgradoTransaccion: number) {
    return this.posgradosTransaccionService.remove(idPosgradoTransaccion);
  }
}