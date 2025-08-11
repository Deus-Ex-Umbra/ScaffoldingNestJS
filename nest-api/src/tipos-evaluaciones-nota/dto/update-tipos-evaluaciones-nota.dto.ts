import { PartialType } from '@nestjs/mapped-types';
import { CreateTiposEvaluacionesNotaDto } from './create-tipos-evaluaciones-nota.dto';

export class UpdateTiposEvaluacionesNotaDto extends PartialType(CreateTiposEvaluacionesNotaDto) {}