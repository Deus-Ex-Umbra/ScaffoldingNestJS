import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreateNivelesAcademicoDto {
    nombre?: string;
    descripcion?: string;
    estado?: string;

}