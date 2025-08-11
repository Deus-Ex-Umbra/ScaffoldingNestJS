import { PartialType } from '@nestjs/mapped-types';
import { CreateCuentasConceptoDto } from './create-cuentas-concepto.dto';

export class UpdateCuentasConceptoDto extends PartialType(CreateCuentasConceptoDto) {}