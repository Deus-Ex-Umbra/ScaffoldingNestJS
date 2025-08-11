import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreatePisosBloquDto {
    idBloque?: number;
    idPiso?: number;
    nombre?: string;
    cantidadAmbientes?: number;
    imagen?: string;
    estado?: string;

}