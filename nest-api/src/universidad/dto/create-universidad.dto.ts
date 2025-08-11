import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreateUniversidadDto {
    nombre?: string;
    nombreAbreviado?: string;
    inicial?: string;
    estado?: string;

}