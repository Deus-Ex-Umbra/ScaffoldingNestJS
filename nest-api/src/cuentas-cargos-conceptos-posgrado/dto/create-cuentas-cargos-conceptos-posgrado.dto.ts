import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreateCuentasCargosConceptosPosgradoDto {
    idCuentaCargoPosgradoConcepto?: number;
    costo?: number;
    porcentaje?: number;
    descuento?: number;
    montoPagar?: number;
    fecha?: Date;
    desglose?: boolean;
    estado?: string;

}