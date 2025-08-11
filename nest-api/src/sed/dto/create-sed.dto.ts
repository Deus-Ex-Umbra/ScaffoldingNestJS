import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreateSedDto {
    nombre?: string;
    estado?: string;

}