import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreateAmbientDto {
    idPisoBloque?: number;
    idTipoAmbiente?: number;
    nombre?: string;
    codigo?: string;
    capacidad?: number;
    metroCuadrado?: number;
    imagenExterior?: string;
    imagenInterior?: string;
    estado?: string;

}