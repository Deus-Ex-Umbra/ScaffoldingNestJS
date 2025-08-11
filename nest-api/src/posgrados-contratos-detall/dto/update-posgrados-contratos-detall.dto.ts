import { PartialType } from '@nestjs/mapped-types';
import { CreatePosgradosContratosDetallDto } from './create-posgrados-contratos-detall.dto';

export class UpdatePosgradosContratosDetallDto extends PartialType(CreatePosgradosContratosDetallDto) {}