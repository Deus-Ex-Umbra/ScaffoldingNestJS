import { PartialType } from '@nestjs/mapped-types';
import { CreateRolesMenusPrincipalDto } from './create-roles-menus-principal.dto';

export class UpdateRolesMenusPrincipalDto extends PartialType(CreateRolesMenusPrincipalDto) {}