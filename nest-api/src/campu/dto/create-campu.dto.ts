import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreateCampuDto {
    nombre?: string;
    direccion?: string;
    poligono?: string;
    latitud?: string;
    longitud?: string;
    imagen?: string;
    estado?: string;

}