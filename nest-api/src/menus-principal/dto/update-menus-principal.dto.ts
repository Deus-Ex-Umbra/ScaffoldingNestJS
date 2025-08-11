import { PartialType } from '@nestjs/mapped-types';
import { CreateMenusPrincipalDto } from './create-menus-principal.dto';

export class UpdateMenusPrincipalDto extends PartialType(CreateMenusPrincipalDto) {}