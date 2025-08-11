import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreateCarreraDto {
    idFacultad?: number;
    idModalidad?: number;
    idCarreraNivelAcademico?: number;
    idSede?: number;
    nombre?: string;
    nombreAbreviado?: string;
    fechaAprobacionCurriculo?: Date;
    fechaCreacion?: Date;
    resolucion?: string;
    direccion?: string;
    latitud?: string;
    longitud?: string;
    fax?: string;
    telefono?: string;
    telefonoInterno?: string;
    casilla?: string;
    email?: string;
    sitioWeb?: string;
    estado?: string;

}