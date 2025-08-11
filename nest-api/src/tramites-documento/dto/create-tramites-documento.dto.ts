import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreateTramitesDocumentoDto {
    nombre?: string;
    descripcion?: string;
    estado?: string;

}