import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreatePersonasAdministrativoDto {
    idPersona?: number;
    cargo?: string;
    fecha?: Date;
    estado?: string;

}