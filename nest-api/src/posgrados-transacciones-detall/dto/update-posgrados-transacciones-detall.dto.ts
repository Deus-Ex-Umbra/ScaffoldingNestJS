import { PartialType } from '@nestjs/mapped-types';
import { CreatePosgradosTransaccionesDetallDto } from './create-posgrados-transacciones-detall.dto';

export class UpdatePosgradosTransaccionesDetallDto extends PartialType(CreatePosgradosTransaccionesDetallDto) {}