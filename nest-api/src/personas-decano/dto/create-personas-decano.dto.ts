import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreatePersonasDecanoDto {
    idFacultad?: number;
    idPersona?: number;
    fechaInicio?: Date;
    fechaFin?: Date;
    resolucion?: string;
    firmaDigital?: string;
    observacion?: string;
    estado?: string;

}