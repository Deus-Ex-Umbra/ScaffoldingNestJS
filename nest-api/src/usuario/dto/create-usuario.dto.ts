import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreateUsuarioDto {
    idPersona?: number;
    nombreemail?: string;
    password?: string;
    tipo?: number;
    fecha?: Date;
    fechaFinalizacion?: Date;
    observacion?: string;
    estado?: string;

}