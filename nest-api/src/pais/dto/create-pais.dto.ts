import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreatePaisDto {
    nombre?: string;
    estado?: string;

}