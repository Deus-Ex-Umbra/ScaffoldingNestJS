import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreateRolesMenusPrincipalDto {
    idRol?: number;
    idMenuPrincipal?: number;
    estado?: string;

}