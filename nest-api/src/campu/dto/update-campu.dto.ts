import { PartialType } from '@nestjs/mapped-types';
import { CreateCampuDto } from './create-campu.dto';

export class UpdateCampuDto extends PartialType(CreateCampuDto) {}