import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('modulos')
export class Modulo {
    @PrimaryGeneratedColumn({ name: 'id_modulo' })
    idModulo: number;

    @Column({ name: 'nombre', type: 'character varying', nullable: false })
    nombre: string;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}