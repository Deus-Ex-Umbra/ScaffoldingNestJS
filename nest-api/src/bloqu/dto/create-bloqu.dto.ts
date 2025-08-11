import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreateBloquDto {
    idEdificio?: number;
    nombre?: string;
    imagen?: string;
    estado?: string;

}