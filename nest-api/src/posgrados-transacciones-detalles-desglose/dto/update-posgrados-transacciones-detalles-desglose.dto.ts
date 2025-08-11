import { PartialType } from '@nestjs/mapped-types';
import { CreatePosgradosTransaccionesDetallesDesgloseDto } from './create-posgrados-transacciones-detalles-desglose.dto';

export class UpdatePosgradosTransaccionesDetallesDesgloseDto extends PartialType(CreatePosgradosTransaccionesDetallesDesgloseDto) {}