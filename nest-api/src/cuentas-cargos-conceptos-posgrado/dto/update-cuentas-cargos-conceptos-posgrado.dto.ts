import { PartialType } from '@nestjs/mapped-types';
import { CreateCuentasCargosConceptosPosgradoDto } from './create-cuentas-cargos-conceptos-posgrado.dto';

export class UpdateCuentasCargosConceptosPosgradoDto extends PartialType(CreateCuentasCargosConceptosPosgradoDto) {}