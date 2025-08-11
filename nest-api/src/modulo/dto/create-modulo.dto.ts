import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreateModuloDto {
    nombre?: string;
    estado?: string;

}