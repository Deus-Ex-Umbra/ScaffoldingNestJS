import { PartialType } from '@nestjs/mapped-types';
import { CreatePosgradoNivelDto } from './create-posgrado-nivel.dto';

export class UpdatePosgradoNivelDto extends PartialType(CreatePosgradoNivelDto) {}