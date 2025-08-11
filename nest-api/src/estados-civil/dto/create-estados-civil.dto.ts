import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreateEstadosCivilDto {
    nombre?: string;
    estado?: string;

}