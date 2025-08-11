import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { PosgradosContratoService } from './posgrados-contrato.service';
import { CreatePosgradosContratoDto } from './dto/create-posgrados-contrato.dto';
import { UpdatePosgradosContratoDto } from './dto/update-posgrados-contrato.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('posgrados_contratos')
export class PosgradosContratoController {
  constructor(private readonly posgradosContratoService: PosgradosContratoService) {}

  @Post()
  create(@Body() createPosgradosContratoDto: CreatePosgradosContratoDto) {
    return this.posgradosContratoService.create(createPosgradosContratoDto);
  }

  @Get()
  findAll() {
    return this.posgradosContratoService.findAll();
  }

  @Get(':id_posgrado_contrato')
  findOne(@Param('id_posgrado_contrato', ParseIntPipe) idPosgradoContrato: number) {
    return this.posgradosContratoService.findOne(idPosgradoContrato);
  }

  @Patch(':id_posgrado_contrato')
  update(@Param('id_posgrado_contrato', ParseIntPipe) idPosgradoContrato: number, @Body() updatePosgradosContratoDto: UpdatePosgradosContratoDto) {
    return this.posgradosContratoService.update(idPosgradoContrato, updatePosgradosContratoDto);
  }

  @Delete(':id_posgrado_contrato')
  remove(@Param('id_posgrado_contrato', ParseIntPipe) idPosgradoContrato: number) {
    return this.posgradosContratoService.remove(idPosgradoContrato);
  }
}