import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { MontosExcedentService } from './montos-excedent.service';
import { CreateMontosExcedentDto } from './dto/create-montos-excedent.dto';
import { UpdateMontosExcedentDto } from './dto/update-montos-excedent.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('montos_excedentes')
export class MontosExcedentController {
  constructor(private readonly montosExcedentService: MontosExcedentService) {}

  @Post()
  create(@Body() createMontosExcedentDto: CreateMontosExcedentDto) {
    return this.montosExcedentService.create(createMontosExcedentDto);
  }

  @Get()
  findAll() {
    return this.montosExcedentService.findAll();
  }

  @Get(':id_monto_exedente')
  findOne(@Param('id_monto_exedente', ParseIntPipe) idMontoExedente: number) {
    return this.montosExcedentService.findOne(idMontoExedente);
  }

  @Patch(':id_monto_exedente')
  update(@Param('id_monto_exedente', ParseIntPipe) idMontoExedente: number, @Body() updateMontosExcedentDto: UpdateMontosExcedentDto) {
    return this.montosExcedentService.update(idMontoExedente, updateMontosExcedentDto);
  }

  @Delete(':id_monto_exedente')
  remove(@Param('id_monto_exedente', ParseIntPipe) idMontoExedente: number) {
    return this.montosExcedentService.remove(idMontoExedente);
  }
}