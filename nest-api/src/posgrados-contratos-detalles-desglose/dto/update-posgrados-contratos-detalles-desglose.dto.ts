import { PartialType } from '@nestjs/mapped-types';
import { CreatePosgradosContratosDetallesDesgloseDto } from './create-posgrados-contratos-detalles-desglose.dto';

export class UpdatePosgradosContratosDetallesDesgloseDto extends PartialType(CreatePosgradosContratosDetallesDesgloseDto) {}