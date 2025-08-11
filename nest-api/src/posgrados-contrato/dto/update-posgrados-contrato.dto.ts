import { PartialType } from '@nestjs/mapped-types';
import { CreatePosgradosContratoDto } from './create-posgrados-contrato.dto';

export class UpdatePosgradosContratoDto extends PartialType(CreatePosgradosContratoDto) {}