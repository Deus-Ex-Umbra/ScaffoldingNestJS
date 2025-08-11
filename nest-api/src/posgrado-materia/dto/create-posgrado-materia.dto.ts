import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreatePosgradoMateriaDto {
    idPosgradoPrograma?: number;
    idPosgradoNivel?: number;
    sigla?: string;
    nombre?: string;
    nivelCurso?: number;
    cantidadHoraTeorica?: number;
    cantidadHoraPractica?: number;
    cantidadHoraLaboratorio?: number;
    cantidadHoraPlataforma?: number;
    cantidadHoraVirtual?: number;
    cantidadCredito?: number;
    color?: string;
    icono?: string;
    imagen?: string;
    estado?: string;

}