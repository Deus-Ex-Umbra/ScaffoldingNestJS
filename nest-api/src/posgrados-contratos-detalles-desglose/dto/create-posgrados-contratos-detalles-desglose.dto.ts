import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreatePosgradosContratosDetallesDesgloseDto {
    idPosgradoContratoDetalle?: number;
    monto?: number;
    descripcion?: string;
    pagado?: boolean;
    estado?: string;

}