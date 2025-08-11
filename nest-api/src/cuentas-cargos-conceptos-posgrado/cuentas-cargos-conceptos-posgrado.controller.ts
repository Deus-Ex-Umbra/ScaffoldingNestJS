import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { CuentasCargosConceptosPosgradoService } from './cuentas-cargos-conceptos-posgrado.service';
import { CreateCuentasCargosConceptosPosgradoDto } from './dto/create-cuentas-cargos-conceptos-posgrado.dto';
import { UpdateCuentasCargosConceptosPosgradoDto } from './dto/update-cuentas-cargos-conceptos-posgrado.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('cuentas_cargos_conceptos_posgrados')
export class CuentasCargosConceptosPosgradoController {
  constructor(private readonly cuentasCargosConceptosPosgradoService: CuentasCargosConceptosPosgradoService) {}

  @Post()
  create(@Body() createCuentasCargosConceptosPosgradoDto: CreateCuentasCargosConceptosPosgradoDto) {
    return this.cuentasCargosConceptosPosgradoService.create(createCuentasCargosConceptosPosgradoDto);
  }

  @Get()
  findAll() {
    return this.cuentasCargosConceptosPosgradoService.findAll();
  }

  @Get(':id_cuenta_cargo_concepto_posgrado')
  findOne(@Param('id_cuenta_cargo_concepto_posgrado', ParseIntPipe) idCuentaCargoConceptoPosgrado: number) {
    return this.cuentasCargosConceptosPosgradoService.findOne(idCuentaCargoConceptoPosgrado);
  }

  @Patch(':id_cuenta_cargo_concepto_posgrado')
  update(@Param('id_cuenta_cargo_concepto_posgrado', ParseIntPipe) idCuentaCargoConceptoPosgrado: number, @Body() updateCuentasCargosConceptosPosgradoDto: UpdateCuentasCargosConceptosPosgradoDto) {
    return this.cuentasCargosConceptosPosgradoService.update(idCuentaCargoConceptoPosgrado, updateCuentasCargosConceptosPosgradoDto);
  }

  @Delete(':id_cuenta_cargo_concepto_posgrado')
  remove(@Param('id_cuenta_cargo_concepto_posgrado', ParseIntPipe) idCuentaCargoConceptoPosgrado: number) {
    return this.cuentasCargosConceptosPosgradoService.remove(idCuentaCargoConceptoPosgrado);
  }
}