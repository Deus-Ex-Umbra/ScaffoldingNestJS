import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreateCuentasConceptoDto {
    nombre?: string;
    descripcion?: string;
    estado?: string;

}