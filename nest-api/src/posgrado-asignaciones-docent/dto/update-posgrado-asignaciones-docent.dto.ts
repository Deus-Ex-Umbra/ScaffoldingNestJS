import { PartialType } from '@nestjs/mapped-types';
import { CreatePosgradoAsignacionesDocentDto } from './create-posgrado-asignaciones-docent.dto';

export class UpdatePosgradoAsignacionesDocentDto extends PartialType(CreatePosgradoAsignacionesDocentDto) {}