import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('sexos')
export class Sexo {
    @PrimaryGeneratedColumn({ name: 'id_sexo' })
    idSexo: number;

    @Column({ name: 'nombre', type: 'character varying', nullable: false })
    nombre: string;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}