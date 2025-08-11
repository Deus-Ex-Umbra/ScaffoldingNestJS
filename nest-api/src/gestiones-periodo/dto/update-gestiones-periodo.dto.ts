import { PartialType } from '@nestjs/mapped-types';
import { CreateGestionesPeriodoDto } from './create-gestiones-periodo.dto';

export class UpdateGestionesPeriodoDto extends PartialType(CreateGestionesPeriodoDto) {}