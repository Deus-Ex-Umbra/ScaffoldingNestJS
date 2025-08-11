import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreateGruposSanguineoDto {
    nombre?: string;
    estado?: string;

}