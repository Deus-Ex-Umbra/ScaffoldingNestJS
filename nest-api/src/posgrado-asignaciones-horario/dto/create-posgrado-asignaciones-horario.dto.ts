import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreatePosgradoAsignacionesHorarioDto {
    idPosgradoAsignacionDocente?: number;
    idAmbiente?: number;
    idDia?: number;
    idHoraClase?: number;
    claseLink?: string;
    claseDescripcion?: string;
    fechaRegistro?: Date;
    estado?: string;

}