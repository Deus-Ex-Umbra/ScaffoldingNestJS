import { PartialType } from '@nestjs/mapped-types';
import { CreateFacultadesEdificioDto } from './create-facultades-edificio.dto';

export class UpdateFacultadesEdificioDto extends PartialType(CreateFacultadesEdificioDto) {}