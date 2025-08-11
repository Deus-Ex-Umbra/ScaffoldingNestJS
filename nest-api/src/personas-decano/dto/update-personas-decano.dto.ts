import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonasDecanoDto } from './create-personas-decano.dto';

export class UpdatePersonasDecanoDto extends PartialType(CreatePersonasDecanoDto) {}