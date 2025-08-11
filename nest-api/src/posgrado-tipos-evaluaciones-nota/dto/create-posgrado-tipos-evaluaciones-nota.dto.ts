import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreatePosgradoTiposEvaluacionesNotaDto {
    nombre?: string;
    configuracion?: any;
    notaMinimaAprobacion?: number;
    estado?: string;

}