import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreatePosgradoAsignacionesDocentDto {
    idPersonaDocente?: number;
    idPosgradoMateria?: number;
    idPosgradoTipoEvaluacionNota?: number;
    idGestionPeriodo?: number;
    tipoCalificacion?: string;
    grupo?: string;
    cupoMaximoEstudiante?: number;
    finalizaPlanillaCalificacion?: string;
    fechaLimiteExamenFinal?: Date;
    fechaLimiteNota2daInstancia?: Date;
    fechaLimiteNotaExamenMesa?: Date;
    fechaFinalizacionPlanilla?: Date;
    hash?: string;
    codigoBarras?: string;
    codigoQr?: string;
    estado?: string;

}