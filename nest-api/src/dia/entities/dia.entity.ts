import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('dias')
export class Dia {
    @PrimaryGeneratedColumn({ name: 'id_dia' })
    idDia: number;

    @Column({ name: 'numero', type: 'integer', nullable: true })
    numero: number;

    @Column({ name: 'nombre', type: 'character varying', nullable: true })
    nombre: string;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}