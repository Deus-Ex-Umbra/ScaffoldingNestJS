import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonasAlumnosPosgradoDto } from './create-personas-alumnos-posgrado.dto';

export class UpdatePersonasAlumnosPosgradoDto extends PartialType(CreatePersonasAlumnosPosgradoDto) {}