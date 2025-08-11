import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreatePersonaDto {
    idLocalidad?: number;
    numeroIdentificacionPersonal?: string;
    idEmisionCedula?: number;
    paterno?: string;
    materno?: string;
    nombre?: string;
    idSexo?: number;
    idGrupoSanguineo?: number;
    fechaNacimiento?: Date;
    direccion?: string;
    latitud?: string;
    longitud?: string;
    telefonoCelular?: string;
    telefonoFijo?: string;
    zona?: string;
    idEstadoCivil?: number;
    email?: string;
    fotografia?: string;
    abreviacionTitulo?: string;
    estado?: string;

}