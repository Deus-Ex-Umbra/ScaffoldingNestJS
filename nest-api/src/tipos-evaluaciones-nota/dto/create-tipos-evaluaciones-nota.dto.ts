import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreateTiposEvaluacionesNotaDto {
    nombre?: string;
    parcial?: number;
    practica?: number;
    laboratorio?: number;
    examenFinal?: number;
    notaMinimaAprobacion?: number;
    estado?: string;

}