import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreatePersonasRolDto {
    idPersona?: number;
    idRol?: number;
    fechaAsignacion?: Date;
    estado?: string;

}