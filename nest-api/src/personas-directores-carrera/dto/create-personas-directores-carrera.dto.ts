import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreatePersonasDirectoresCarreraDto {
    idCarrera?: number;
    idPersona?: number;
    fechaInicio?: Date;
    fechaFin?: Date;
    resolucion?: string;
    firmaDigital?: string;
    observacion?: string;
    estado?: string;

}