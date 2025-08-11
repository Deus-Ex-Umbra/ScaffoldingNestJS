import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonasFacultadesAdministradorDto } from './create-personas-facultades-administrador.dto';

export class UpdatePersonasFacultadesAdministradorDto extends PartialType(CreatePersonasFacultadesAdministradorDto) {}