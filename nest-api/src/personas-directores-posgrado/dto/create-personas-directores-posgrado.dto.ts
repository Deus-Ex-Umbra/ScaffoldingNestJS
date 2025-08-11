import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreatePersonasDirectoresPosgradoDto {
    idPersona?: number;
    fechaInicio?: Date;
    fechaFin?: Date;
    firmaDigital?: string;
    estado?: string;

}