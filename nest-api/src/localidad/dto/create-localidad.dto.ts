import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreateLocalidadDto {
    idProvincia?: number;
    nombre?: string;
    estado?: string;

}