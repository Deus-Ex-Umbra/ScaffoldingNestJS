import { PartialType } from '@nestjs/mapped-types';
import { CreateMontosExcedentDto } from './create-montos-excedent.dto';

export class UpdateMontosExcedentDto extends PartialType(CreateMontosExcedentDto) {}