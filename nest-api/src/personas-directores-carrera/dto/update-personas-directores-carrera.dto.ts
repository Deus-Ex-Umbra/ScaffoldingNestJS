import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonasDirectoresCarreraDto } from './create-personas-directores-carrera.dto';

export class UpdatePersonasDirectoresCarreraDto extends PartialType(CreatePersonasDirectoresCarreraDto) {}