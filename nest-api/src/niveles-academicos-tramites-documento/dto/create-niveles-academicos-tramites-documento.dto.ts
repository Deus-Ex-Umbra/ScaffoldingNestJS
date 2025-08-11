import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreateNivelesAcademicosTramitesDocumentoDto {
    idNivelAcademico?: number;
    idTramiteDocumento?: number;
    fecha?: Date;
    estado?: string;

}