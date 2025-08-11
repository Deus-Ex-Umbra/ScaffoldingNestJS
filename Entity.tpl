import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
{{ table.bcryptImport }}

@Entity('{{ table.name }}')
export class {{ table.className }} {
{{ table.properties }}
{{ table.validatePasswordMethod }}
}