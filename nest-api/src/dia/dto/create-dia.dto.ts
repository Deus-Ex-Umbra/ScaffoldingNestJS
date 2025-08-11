import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreateDiaDto {
    numero?: number;
    nombre?: string;
    estado?: string;

}