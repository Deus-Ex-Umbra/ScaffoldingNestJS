import { PartialType } from '@nestjs/mapped-types';
import { CreatePosgradoTiposEvaluacionesNotaDto } from './create-posgrado-tipos-evaluaciones-nota.dto';

export class UpdatePosgradoTiposEvaluacionesNotaDto extends PartialType(CreatePosgradoTiposEvaluacionesNotaDto) {}