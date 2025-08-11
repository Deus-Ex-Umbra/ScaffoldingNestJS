import { PartialType } from '@nestjs/mapped-types';
import { CreatePosgradoAsignacionesHorarioDto } from './create-posgrado-asignaciones-horario.dto';

export class UpdatePosgradoAsignacionesHorarioDto extends PartialType(CreatePosgradoAsignacionesHorarioDto) {}