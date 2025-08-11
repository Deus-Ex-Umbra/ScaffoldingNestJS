import { PartialType } from '@nestjs/mapped-types';
import { CreateGruposSanguineoDto } from './create-grupos-sanguineo.dto';

export class UpdateGruposSanguineoDto extends PartialType(CreateGruposSanguineoDto) {}