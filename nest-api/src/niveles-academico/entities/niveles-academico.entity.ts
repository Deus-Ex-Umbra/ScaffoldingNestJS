import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('niveles_academicos')
export class NivelesAcademico {
    @PrimaryGeneratedColumn({ name: 'id_nivel_academico' })
    idNivelAcademico: number;

    @Column({ name: 'nombre', type: 'character varying', nullable: false })
    nombre: string;

    @Column({ name: 'descripcion', type: 'character varying', nullable: true })
    descripcion: string;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}