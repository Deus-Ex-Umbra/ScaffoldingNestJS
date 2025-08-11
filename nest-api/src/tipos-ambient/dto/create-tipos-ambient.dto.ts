import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreateTiposAmbientDto {
    nombre?: string;
    estado?: string;

}