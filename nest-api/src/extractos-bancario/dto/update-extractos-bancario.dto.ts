import { PartialType } from '@nestjs/mapped-types';
import { CreateExtractosBancarioDto } from './create-extractos-bancario.dto';

export class UpdateExtractosBancarioDto extends PartialType(CreateExtractosBancarioDto) {}