import { PartialType } from '@nestjs/mapped-types';
import { CreateEmisionCedulaDto } from './create-emision-cedula.dto';

export class UpdateEmisionCedulaDto extends PartialType(CreateEmisionCedulaDto) {}