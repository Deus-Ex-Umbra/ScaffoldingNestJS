import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { CuentasCargosPosgradoService } from './cuentas-cargos-posgrado.service';
import { CreateCuentasCargosPosgradoDto } from './dto/create-cuentas-cargos-posgrado.dto';
import { UpdateCuentasCargosPosgradoDto } from './dto/update-cuentas-cargos-posgrado.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('cuentas_cargos_posgrados')
export class CuentasCargosPosgradoController {
  constructor(private readonly cuentasCargosPosgradoService: CuentasCargosPosgradoService) {}

  @Post()
  create(@Body() createCuentasCargosPosgradoDto: CreateCuentasCargosPosgradoDto) {
    return this.cuentasCargosPosgradoService.create(createCuentasCargosPosgradoDto);
  }

  @Get()
  findAll() {
    return this.cuentasCargosPosgradoService.findAll();
  }

  @Get(':id_cuenta_cargo_posgrado')
  findOne(@Param('id_cuenta_cargo_posgrado', ParseIntPipe) idCuentaCargoPosgrado: number) {
    return this.cuentasCargosPosgradoService.findOne(idCuentaCargoPosgrado);
  }

  @Patch(':id_cuenta_cargo_posgrado')
  update(@Param('id_cuenta_cargo_posgrado', ParseIntPipe) idCuentaCargoPosgrado: number, @Body() updateCuentasCargosPosgradoDto: UpdateCuentasCargosPosgradoDto) {
    return this.cuentasCargosPosgradoService.update(idCuentaCargoPosgrado, updateCuentasCargosPosgradoDto);
  }

  @Delete(':id_cuenta_cargo_posgrado')
  remove(@Param('id_cuenta_cargo_posgrado', ParseIntPipe) idCuentaCargoPosgrado: number) {
    return this.cuentasCargosPosgradoService.remove(idCuentaCargoPosgrado);
  }
}