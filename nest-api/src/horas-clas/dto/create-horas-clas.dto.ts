import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreateHorasClasDto {
    numero?: number;
    horaInicio?: Date;
    horaFin?: Date;
    estado?: string;

}