import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreateEmisionCedulaDto {
    nombre?: string;
    descripcion?: string;
    estado?: string;

}