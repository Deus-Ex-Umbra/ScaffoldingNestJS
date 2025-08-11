import { PartialType } from '@nestjs/mapped-types';
import { CreatePosgradoMateriaDto } from './create-posgrado-materia.dto';

export class UpdatePosgradoMateriaDto extends PartialType(CreatePosgradoMateriaDto) {}