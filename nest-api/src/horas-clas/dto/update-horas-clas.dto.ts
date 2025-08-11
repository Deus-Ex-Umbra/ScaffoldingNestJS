import { PartialType } from '@nestjs/mapped-types';
import { CreateHorasClasDto } from './create-horas-clas.dto';

export class UpdateHorasClasDto extends PartialType(CreateHorasClasDto) {}