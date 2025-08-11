import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('sedes')
export class Sed {
    @PrimaryGeneratedColumn({ name: 'id_sede' })
    idSede: number;

    @Column({ name: 'nombre', type: 'character varying', nullable: false })
    nombre: string;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}