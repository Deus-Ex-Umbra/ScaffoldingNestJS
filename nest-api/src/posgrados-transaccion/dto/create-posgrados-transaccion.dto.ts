import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreatePosgradosTransaccionDto {
    idPosgradoContrato?: number;
    idPersonaAlumnoPosgrado?: number;
    fechaTransaccion?: Date;
    estado?: string;

}