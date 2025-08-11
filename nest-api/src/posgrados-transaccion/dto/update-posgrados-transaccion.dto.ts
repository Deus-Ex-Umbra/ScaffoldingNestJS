import { PartialType } from '@nestjs/mapped-types';
import { CreatePosgradosTransaccionDto } from './create-posgrados-transaccion.dto';

export class UpdatePosgradosTransaccionDto extends PartialType(CreatePosgradosTransaccionDto) {}