import { PartialType } from '@nestjs/mapped-types';
import { CreateCuentasCargosPosgradosConceptoDto } from './create-cuentas-cargos-posgrados-concepto.dto';

export class UpdateCuentasCargosPosgradosConceptoDto extends PartialType(CreateCuentasCargosPosgradosConceptoDto) {}