import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('carreras')
export class Carrera {
    @PrimaryGeneratedColumn({ name: 'id_carrera' })
    idCarrera: number;

    @Column({ name: 'id_facultad', type: 'integer', nullable: false })
    idFacultad: number;

    @Column({ name: 'id_modalidad', type: 'integer', nullable: false })
    idModalidad: number;

    @Column({ name: 'id_carrera_nivel_academico', type: 'integer', nullable: false })
    idCarreraNivelAcademico: number;

    @Column({ name: 'id_sede', type: 'integer', nullable: false })
    idSede: number;

    @Column({ name: 'nombre', type: 'character varying', nullable: false })
    nombre: string;

    @Column({ name: 'nombre_abreviado', type: 'character varying', nullable: true })
    nombreAbreviado: string;

    @Column({ name: 'fecha_aprobacion_curriculo', type: 'date', nullable: true })
    fechaAprobacionCurriculo: Date;

    @Column({ name: 'fecha_creacion', type: 'date', nullable: true })
    fechaCreacion: Date;

    @Column({ name: 'resolucion', type: 'character varying', nullable: true })
    resolucion: string;

    @Column({ name: 'direccion', type: 'character varying', nullable: true })
    direccion: string;

    @Column({ name: 'latitud', type: 'character varying', nullable: true })
    latitud: string;

    @Column({ name: 'longitud', type: 'character varying', nullable: true })
    longitud: string;

    @Column({ name: 'fax', type: 'character varying', nullable: true })
    fax: string;

    @Column({ name: 'telefono', type: 'character varying', nullable: true })
    telefono: string;

    @Column({ name: 'telefono_interno', type: 'character varying', nullable: true })
    telefonoInterno: string;

    @Column({ name: 'casilla', type: 'character varying', nullable: true })
    casilla: string;

    @Column({ name: 'email', type: 'character varying', nullable: true })
    email: string;

    @Column({ name: 'sitio_web', type: 'character varying', nullable: true })
    sitioWeb: string;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}