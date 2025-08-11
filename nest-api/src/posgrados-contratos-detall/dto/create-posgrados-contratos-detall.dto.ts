import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreatePosgradosContratosDetallDto {
    idPosgradoContrato?: number;
    idCuentaCargoConceptoPosgrado?: number;
    pagado?: boolean;
    montoPagado?: number;
    montoAdeudado?: number;
    estado?: string;

}