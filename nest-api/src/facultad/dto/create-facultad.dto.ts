import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreateFacultadDto {
    idArea?: number;
    nombre?: string;
    nombreAbreviado?: string;
    direccion?: string;
    telefono?: string;
    telefonoInterno?: string;
    fax?: string;
    email?: string;
    latitud?: string;
    longitud?: string;
    fechaCreacion?: Date;
    escudo?: string;
    imagen?: string;
    estadoVirtual?: string;
    estado?: string;

}