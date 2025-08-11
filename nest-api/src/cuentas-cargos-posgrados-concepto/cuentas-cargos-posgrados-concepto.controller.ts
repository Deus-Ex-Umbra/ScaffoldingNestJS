import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { CuentasCargosPosgradosConceptoService } from './cuentas-cargos-posgrados-concepto.service';
import { CreateCuentasCargosPosgradosConceptoDto } from './dto/create-cuentas-cargos-posgrados-concepto.dto';
import { UpdateCuentasCargosPosgradosConceptoDto } from './dto/update-cuentas-cargos-posgrados-concepto.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('cuentas_cargos_posgrados_conceptos')
export class CuentasCargosPosgradosConceptoController {
  constructor(private readonly cuentasCargosPosgradosConceptoService: CuentasCargosPosgradosConceptoService) {}

  @Post()
  create(@Body() createCuentasCargosPosgradosConceptoDto: CreateCuentasCargosPosgradosConceptoDto) {
    return this.cuentasCargosPosgradosConceptoService.create(createCuentasCargosPosgradosConceptoDto);
  }

  @Get()
  findAll() {
    return this.cuentasCargosPosgradosConceptoService.findAll();
  }

  @Get(':id_cuenta_cargo_posgrado_concepto')
  findOne(@Param('id_cuenta_cargo_posgrado_concepto', ParseIntPipe) idCuentaCargoPosgradoConcepto: number) {
    return this.cuentasCargosPosgradosConceptoService.findOne(idCuentaCargoPosgradoConcepto);
  }

  @Patch(':id_cuenta_cargo_posgrado_concepto')
  update(@Param('id_cuenta_cargo_posgrado_concepto', ParseIntPipe) idCuentaCargoPosgradoConcepto: number, @Body() updateCuentasCargosPosgradosConceptoDto: UpdateCuentasCargosPosgradosConceptoDto) {
    return this.cuentasCargosPosgradosConceptoService.update(idCuentaCargoPosgradoConcepto, updateCuentasCargosPosgradosConceptoDto);
  }

  @Delete(':id_cuenta_cargo_posgrado_concepto')
  remove(@Param('id_cuenta_cargo_posgrado_concepto', ParseIntPipe) idCuentaCargoPosgradoConcepto: number) {
    return this.cuentasCargosPosgradosConceptoService.remove(idCuentaCargoPosgradoConcepto);
  }
}