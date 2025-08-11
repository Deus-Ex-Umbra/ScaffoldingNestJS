import { PartialType } from '@nestjs/mapped-types';
import { CreateEstadosCivilDto } from './create-estados-civil.dto';

export class UpdateEstadosCivilDto extends PartialType(CreateEstadosCivilDto) {}