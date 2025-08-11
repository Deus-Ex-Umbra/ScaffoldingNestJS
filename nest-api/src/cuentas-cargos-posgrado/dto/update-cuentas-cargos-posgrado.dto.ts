import { PartialType } from '@nestjs/mapped-types';
import { CreateCuentasCargosPosgradoDto } from './create-cuentas-cargos-posgrado.dto';

export class UpdateCuentasCargosPosgradoDto extends PartialType(CreateCuentasCargosPosgradoDto) {}