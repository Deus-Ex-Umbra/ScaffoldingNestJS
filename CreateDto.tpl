import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class Create{{ table.className }}Dto {
{{ table.dtoProperties }}
}