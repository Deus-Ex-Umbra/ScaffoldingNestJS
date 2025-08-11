import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreateGestionesPeriodoDto {
    gestion?: number;
    periodo?: number;
    tipo?: string;
    estado?: string;

}