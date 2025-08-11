import { PartialType } from '@nestjs/mapped-types';
import { CreateTiposAmbientDto } from './create-tipos-ambient.dto';

export class UpdateTiposAmbientDto extends PartialType(CreateTiposAmbientDto) {}