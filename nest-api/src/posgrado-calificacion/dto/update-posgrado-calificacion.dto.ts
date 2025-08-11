import { PartialType } from '@nestjs/mapped-types';
import { CreatePosgradoCalificacionDto } from './create-posgrado-calificacion.dto';

export class UpdatePosgradoCalificacionDto extends PartialType(CreatePosgradoCalificacionDto) {}