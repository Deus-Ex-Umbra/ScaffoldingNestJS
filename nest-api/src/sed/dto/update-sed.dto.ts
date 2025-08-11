import { PartialType } from '@nestjs/mapped-types';
import { CreateSedDto } from './create-sed.dto';

export class UpdateSedDto extends PartialType(CreateSedDto) {}