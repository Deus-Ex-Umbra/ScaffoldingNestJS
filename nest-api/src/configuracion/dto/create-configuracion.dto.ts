import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreateConfiguracionDto {
    idUniversidad?: number;
    tipo?: string;
    descripcion?: string;
    estado?: string;

}