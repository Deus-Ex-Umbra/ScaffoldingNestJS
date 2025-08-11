import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreatePosgradoNivelDto {
    nombre?: string;
    descripcion?: string;
    estado?: string;

}