import { PartialType } from '@nestjs/mapped-types';
import { CreateTiposPersonaDto } from './create-tipos-persona.dto';

export class UpdateTiposPersonaDto extends PartialType(CreateTiposPersonaDto) {}