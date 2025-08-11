import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreateRolDto {
    nombre?: string;
    descripcion?: string;
    estado?: string;

}