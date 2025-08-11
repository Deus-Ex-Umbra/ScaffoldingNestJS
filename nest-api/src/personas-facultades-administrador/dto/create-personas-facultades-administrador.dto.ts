import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreatePersonasFacultadesAdministradorDto {
    idPersona?: number;
    fechaInicio?: Date;
    fechaFin?: Date;
    firmaDigital?: string;
    estado?: string;

}