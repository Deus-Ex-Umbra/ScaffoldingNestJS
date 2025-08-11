import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreateModalidadDto {
    nombre?: string;
    descripcion?: string;
    estado?: string;

}