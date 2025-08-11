import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreatePisoDto {
    numero?: number;
    nombre?: string;
    estado?: string;

}