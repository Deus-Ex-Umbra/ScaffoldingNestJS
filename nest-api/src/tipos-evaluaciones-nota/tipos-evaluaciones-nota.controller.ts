import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { TiposEvaluacionesNotaService } from './tipos-evaluaciones-nota.service';
import { CreateTiposEvaluacionesNotaDto } from './dto/create-tipos-evaluaciones-nota.dto';
import { UpdateTiposEvaluacionesNotaDto } from './dto/update-tipos-evaluaciones-nota.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('tipos_evaluaciones_notas')
export class TiposEvaluacionesNotaController {
  constructor(private readonly tiposEvaluacionesNotaService: TiposEvaluacionesNotaService) {}

  @Post()
  create(@Body() createTiposEvaluacionesNotaDto: CreateTiposEvaluacionesNotaDto) {
    return this.tiposEvaluacionesNotaService.create(createTiposEvaluacionesNotaDto);
  }

  @Get()
  findAll() {
    return this.tiposEvaluacionesNotaService.findAll();
  }

  @Get(':id_tipo_evaluacion_nota')
  findOne(@Param('id_tipo_evaluacion_nota', ParseIntPipe) idTipoEvaluacionNota: number) {
    return this.tiposEvaluacionesNotaService.findOne(idTipoEvaluacionNota);
  }

  @Patch(':id_tipo_evaluacion_nota')
  update(@Param('id_tipo_evaluacion_nota', ParseIntPipe) idTipoEvaluacionNota: number, @Body() updateTiposEvaluacionesNotaDto: UpdateTiposEvaluacionesNotaDto) {
    return this.tiposEvaluacionesNotaService.update(idTipoEvaluacionNota, updateTiposEvaluacionesNotaDto);
  }

  @Delete(':id_tipo_evaluacion_nota')
  remove(@Param('id_tipo_evaluacion_nota', ParseIntPipe) idTipoEvaluacionNota: number) {
    return this.tiposEvaluacionesNotaService.remove(idTipoEvaluacionNota);
  }
}