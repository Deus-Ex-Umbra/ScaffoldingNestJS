import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonasAlumnoDto } from './create-personas-alumno.dto';

export class UpdatePersonasAlumnoDto extends PartialType(CreatePersonasAlumnoDto) {}