import { PartialType } from '@nestjs/mapped-types';
import { CreateBloquDto } from './create-bloqu.dto';

export class UpdateBloquDto extends PartialType(CreateBloquDto) {}