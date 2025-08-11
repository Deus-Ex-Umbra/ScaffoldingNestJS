import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { PosgradoTiposEvaluacionesNotaService } from './posgrado-tipos-evaluaciones-nota.service';
import { CreatePosgradoTiposEvaluacionesNotaDto } from './dto/create-posgrado-tipos-evaluaciones-nota.dto';
import { UpdatePosgradoTiposEvaluacionesNotaDto } from './dto/update-posgrado-tipos-evaluaciones-nota.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('posgrado_tipos_evaluaciones_notas')
export class PosgradoTiposEvaluacionesNotaController {
  constructor(private readonly posgradoTiposEvaluacionesNotaService: PosgradoTiposEvaluacionesNotaService) {}

  @Post()
  create(@Body() createPosgradoTiposEvaluacionesNotaDto: CreatePosgradoTiposEvaluacionesNotaDto) {
    return this.posgradoTiposEvaluacionesNotaService.create(createPosgradoTiposEvaluacionesNotaDto);
  }

  @Get()
  findAll() {
    return this.posgradoTiposEvaluacionesNotaService.findAll();
  }

  @Get(':id_posgrado_tipo_evaluacion_nota')
  findOne(@Param('id_posgrado_tipo_evaluacion_nota', ParseIntPipe) idPosgradoTipoEvaluacionNota: number) {
    return this.posgradoTiposEvaluacionesNotaService.findOne(idPosgradoTipoEvaluacionNota);
  }

  @Patch(':id_posgrado_tipo_evaluacion_nota')
  update(@Param('id_posgrado_tipo_evaluacion_nota', ParseIntPipe) idPosgradoTipoEvaluacionNota: number, @Body() updatePosgradoTiposEvaluacionesNotaDto: UpdatePosgradoTiposEvaluacionesNotaDto) {
    return this.posgradoTiposEvaluacionesNotaService.update(idPosgradoTipoEvaluacionNota, updatePosgradoTiposEvaluacionesNotaDto);
  }

  @Delete(':id_posgrado_tipo_evaluacion_nota')
  remove(@Param('id_posgrado_tipo_evaluacion_nota', ParseIntPipe) idPosgradoTipoEvaluacionNota: number) {
    return this.posgradoTiposEvaluacionesNotaService.remove(idPosgradoTipoEvaluacionNota);
  }
}