import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreateAreaDto {
    idUniversidad?: number;
    nombre?: string;
    nombreAbreviado?: string;
    estado?: string;

}