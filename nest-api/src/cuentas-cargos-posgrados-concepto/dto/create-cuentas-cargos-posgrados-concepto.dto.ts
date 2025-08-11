import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreateCuentasCargosPosgradosConceptoDto {
    idCuentaCargoPosgrado?: number;
    idCuentaConcepto?: number;
    tieneDescuento?: string;
    estado?: string;

}