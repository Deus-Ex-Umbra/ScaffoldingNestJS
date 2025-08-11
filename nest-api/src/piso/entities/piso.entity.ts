import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('pisos')
export class Piso {
    @PrimaryGeneratedColumn({ name: 'id_piso' })
    idPiso: number;

    @Column({ name: 'numero', type: 'integer', nullable: true })
    numero: number;

    @Column({ name: 'nombre', type: 'character varying', nullable: true })
    nombre: string;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}