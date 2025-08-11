import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreatePosgradosContratoDto {
    idCuentaCargoPosgrado?: number;
    idPersonaAlumnoPosgrado?: number;
    numeroCuotas?: number;
    idPersonaDirectorPosgrado?: number;
    idPersonaFacultadAdministrador?: number;
    idPersonaDecano?: number;
    estado?: string;

}