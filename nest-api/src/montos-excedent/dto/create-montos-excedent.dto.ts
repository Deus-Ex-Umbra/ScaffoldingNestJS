import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreateMontosExcedentDto {
    idPosgradoTransaccionDetalle?: number;
    montoExcedente?: number;
    procesando?: string;
    estado?: string;

}