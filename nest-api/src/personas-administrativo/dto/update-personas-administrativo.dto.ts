import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonasAdministrativoDto } from './create-personas-administrativo.dto';

export class UpdatePersonasAdministrativoDto extends PartialType(CreatePersonasAdministrativoDto) {}