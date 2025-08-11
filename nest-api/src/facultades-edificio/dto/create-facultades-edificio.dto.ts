import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreateFacultadesEdificioDto {
    idFacultad?: number;
    idEdificio?: number;
    fechaAsignacion?: Date;
    estado?: string;

}