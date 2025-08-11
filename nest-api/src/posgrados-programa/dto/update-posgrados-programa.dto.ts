import { PartialType } from '@nestjs/mapped-types';
import { CreatePosgradosProgramaDto } from './create-posgrados-programa.dto';

export class UpdatePosgradosProgramaDto extends PartialType(CreatePosgradosProgramaDto) {}