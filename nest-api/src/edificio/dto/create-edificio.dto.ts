import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreateEdificioDto {
    idCampu?: number;
    nombre?: string;
    direccion?: string;
    latitud?: string;
    longitud?: string;
    imagen?: string;
    estado?: string;

}