import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('universidades')
export class Universidad {
    @PrimaryGeneratedColumn({ name: 'id_universidad' })
    idUniversidad: number;

    @Column({ name: 'nombre', type: 'character varying', nullable: true })
    nombre: string;

    @Column({ name: 'nombre_abreviado', type: 'character varying', nullable: true })
    nombreAbreviado: string;

    @Column({ name: 'inicial', type: 'character varying', nullable: true })
    inicial: string;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}