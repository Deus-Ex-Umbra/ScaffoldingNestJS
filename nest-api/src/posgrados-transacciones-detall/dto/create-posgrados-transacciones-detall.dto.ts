import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreatePosgradosTransaccionesDetallDto {
    idPosgradoTransaccion?: number;
    idPosgradoContratoDetalle?: number;
    fechaDeposito?: Date;
    numeroDeposito?: string;
    montoDeposito?: number;
    fotografiaDeposito?: string;
    usadoTransaccion?: string;
    estado?: string;

}