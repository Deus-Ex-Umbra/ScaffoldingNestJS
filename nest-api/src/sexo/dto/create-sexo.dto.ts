import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreateSexoDto {
    nombre?: string;
    estado?: string;

}