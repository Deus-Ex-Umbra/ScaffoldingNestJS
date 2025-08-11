import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreatePersonasDocentDto {
    idPersona?: number;
    fechaIngreso?: Date;
    fecha?: Date;
    estado?: string;

}