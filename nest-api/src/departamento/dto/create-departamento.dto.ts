import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreateDepartamentoDto {
    idPais?: number;
    nombre?: string;
    estado?: string;

}