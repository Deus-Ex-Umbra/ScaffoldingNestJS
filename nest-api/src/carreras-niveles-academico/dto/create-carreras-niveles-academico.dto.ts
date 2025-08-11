import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreateCarrerasNivelesAcademicoDto {
    nombre?: string;
    descripcion?: string;
    estado?: string;

}