import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreateMenusPrincipalDto {
    idModulo?: number;
    nombre?: string;
    icono?: string;
    orden?: number;
    estado?: string;

}