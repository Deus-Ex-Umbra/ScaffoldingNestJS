import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonasRolDto } from './create-personas-rol.dto';

export class UpdatePersonasRolDto extends PartialType(CreatePersonasRolDto) {}