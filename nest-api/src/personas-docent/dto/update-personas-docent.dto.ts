import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonasDocentDto } from './create-personas-docent.dto';

export class UpdatePersonasDocentDto extends PartialType(CreatePersonasDocentDto) {}