import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreatePosgradosProgramaDto {
    idNivelAcademico?: number;
    idCarrera?: number;
    gestion?: number;
    nombre?: string;
    idModalidad?: number;
    fechaInicio?: Date;
    fechaFin?: Date;
    fechaInicioInscrito?: Date;
    fechaFinInscrito?: Date;
    numeroMaxCuotas?: number;
    documento?: string;
    costoTotal?: number;
    formatoContrato?: string;
    formatoContratoDocente?: string;
    estado?: string;

}