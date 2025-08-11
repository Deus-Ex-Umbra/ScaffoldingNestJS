import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { CuentasConceptoService } from './cuentas-concepto.service';
import { CreateCuentasConceptoDto } from './dto/create-cuentas-concepto.dto';
import { UpdateCuentasConceptoDto } from './dto/update-cuentas-concepto.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('cuentas_conceptos')
export class CuentasConceptoController {
  constructor(private readonly cuentasConceptoService: CuentasConceptoService) {}

  @Post()
  create(@Body() createCuentasConceptoDto: CreateCuentasConceptoDto) {
    return this.cuentasConceptoService.create(createCuentasConceptoDto);
  }

  @Get()
  findAll() {
    return this.cuentasConceptoService.findAll();
  }

  @Get(':id_cuenta_concepto')
  findOne(@Param('id_cuenta_concepto', ParseIntPipe) idCuentaConcepto: number) {
    return this.cuentasConceptoService.findOne(idCuentaConcepto);
  }

  @Patch(':id_cuenta_concepto')
  update(@Param('id_cuenta_concepto', ParseIntPipe) idCuentaConcepto: number, @Body() updateCuentasConceptoDto: UpdateCuentasConceptoDto) {
    return this.cuentasConceptoService.update(idCuentaConcepto, updateCuentasConceptoDto);
  }

  @Delete(':id_cuenta_concepto')
  remove(@Param('id_cuenta_concepto', ParseIntPipe) idCuentaConcepto: number) {
    return this.cuentasConceptoService.remove(idCuentaConcepto);
  }
}