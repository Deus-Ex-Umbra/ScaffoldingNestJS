import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreatePosgradoAlumnosDocumentoDto {
    idPersonaAlumnoPosgrado?: number;
    idNivelAcademicoTramiteDocumento?: number;
    fechaSubida?: Date;
    archivo?: string;
    verificado?: string;
    fechaVerificacion?: Date;
    estado?: string;

}