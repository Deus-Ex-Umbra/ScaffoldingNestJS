import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreateProvinciaDto {
    idDepartamento?: number;
    nombre?: string;
    estado?: string;

}