import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreatePersonasAlumnoDto {
    idPersona?: number;
    idCarrera?: number;
    fecha?: Date;
    estado?: string;

}