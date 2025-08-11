import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('modalidades')
export class Modalidad {
    @PrimaryGeneratedColumn({ name: 'id_modalidad' })
    idModalidad: number;

    @Column({ name: 'nombre', type: 'character varying', nullable: false })
    nombre: string;

    @Column({ name: 'descripcion', type: 'character varying', nullable: true })
    descripcion: string;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}