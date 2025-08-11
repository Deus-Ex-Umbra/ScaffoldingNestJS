import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreateExtractosBancarioDto {
    nombreCompleto?: string;
    carnetIdentidad?: string;
    numeroCodigo?: string;
    monto?: number;
    fecha?: Date;
    hora?: Date;
    procesando?: string;
    estado?: string;

}