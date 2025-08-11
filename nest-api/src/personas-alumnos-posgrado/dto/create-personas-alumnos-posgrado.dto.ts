import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreatePersonasAlumnosPosgradoDto {
    idPersona?: number;
    idPosgradoPrograma?: number;
    fecha?: Date;
    inscrito?: string;
    estado?: string;

}