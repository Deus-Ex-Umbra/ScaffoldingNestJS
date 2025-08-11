import { PartialType } from '@nestjs/mapped-types';
import { CreateCarrerasNivelesAcademicoDto } from './create-carreras-niveles-academico.dto';

export class UpdateCarrerasNivelesAcademicoDto extends PartialType(CreateCarrerasNivelesAcademicoDto) {}