import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('carreras_niveles_academicos')
export class CarrerasNivelesAcademico {
    @PrimaryGeneratedColumn({ name: 'id_carrera_nivel_academico' })
    idCarreraNivelAcademico: number;

    @Column({ name: 'nombre', type: 'character varying', nullable: true })
    nombre: string;

    @Column({ name: 'descripcion', type: 'character varying', nullable: true })
    descripcion: string;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}