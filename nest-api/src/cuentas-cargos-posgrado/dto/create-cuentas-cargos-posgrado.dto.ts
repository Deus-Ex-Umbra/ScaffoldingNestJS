import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreateCuentasCargosPosgradoDto {
    idPosgradoPrograma?: number;
    nombre?: string;
    numeroFormulario?: string;
    estado?: string;

}