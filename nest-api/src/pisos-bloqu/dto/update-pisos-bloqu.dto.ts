import { PartialType } from '@nestjs/mapped-types';
import { CreatePisosBloquDto } from './create-pisos-bloqu.dto';

export class UpdatePisosBloquDto extends PartialType(CreatePisosBloquDto) {}