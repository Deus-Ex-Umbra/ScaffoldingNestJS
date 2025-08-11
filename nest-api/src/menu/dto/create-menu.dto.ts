import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreateMenuDto {
    idMenuPrincipal?: number;
    nombre?: string;
    directorio?: string;
    icono?: string;
    imagen?: string;
    color?: string;
    orden?: number;
    estado?: string;

}