import { PartialType } from '@nestjs/mapped-types';
import { CreatePosgradoAlumnosDocumentoDto } from './create-posgrado-alumnos-documento.dto';

export class UpdatePosgradoAlumnosDocumentoDto extends PartialType(CreatePosgradoAlumnosDocumentoDto) {}