import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('areas')
export class Area {
    @PrimaryGeneratedColumn({ name: 'id_area' })
    idArea: number;

    @Column({ name: 'id_universidad', type: 'integer', nullable: false })
    idUniversidad: number;

    @Column({ name: 'nombre', type: 'character varying', nullable: true })
    nombre: string;

    @Column({ name: 'nombre_abreviado', type: 'character varying', nullable: true })
    nombreAbreviado: string;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}