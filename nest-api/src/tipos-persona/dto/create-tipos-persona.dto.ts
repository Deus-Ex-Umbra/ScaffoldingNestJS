import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreateTiposPersonaDto {
    idPersona?: number;
    idRol?: number;
    tipo?: string;
    estado?: string;

}