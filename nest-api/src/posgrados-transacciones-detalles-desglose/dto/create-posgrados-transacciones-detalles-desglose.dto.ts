import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreatePosgradosTransaccionesDetallesDesgloseDto {
    idPosgradoContratoDetalle?: number;
    idPosgradoTransaccionDetalle?: number;
    montoDesglosado?: number;
    descripcion?: string;
    estado?: string;

}