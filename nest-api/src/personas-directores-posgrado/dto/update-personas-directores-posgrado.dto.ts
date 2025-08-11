import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonasDirectoresPosgradoDto } from './create-personas-directores-posgrado.dto';

export class UpdatePersonasDirectoresPosgradoDto extends PartialType(CreatePersonasDirectoresPosgradoDto) {}