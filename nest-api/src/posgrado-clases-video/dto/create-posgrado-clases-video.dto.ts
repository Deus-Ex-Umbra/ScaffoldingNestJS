import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreatePosgradoClasesVideoDto {
    idPosgradoAsignacionHorario?: number;
    claseLink?: string;
    claseFecha?: Date;
    claseHoraInicio?: Date;
    claseHoraFin?: Date;
    claseDuracion?: Date;
    fechaRegistro?: Date;
    estado?: string;

}