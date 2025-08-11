import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('facultades')
export class Facultad {
    @PrimaryGeneratedColumn({ name: 'id_facultad' })
    idFacultad: number;

    @Column({ name: 'id_area', type: 'integer', nullable: false })
    idArea: number;

    @Column({ name: 'nombre', type: 'character varying', nullable: false })
    nombre: string;

    @Column({ name: 'nombre_abreviado', type: 'character varying', nullable: true })
    nombreAbreviado: string;

    @Column({ name: 'direccion', type: 'character varying', nullable: true })
    direccion: string;

    @Column({ name: 'telefono', type: 'character varying', nullable: true })
    telefono: string;

    @Column({ name: 'telefono_interno', type: 'character varying', nullable: true })
    telefonoInterno: string;

    @Column({ name: 'fax', type: 'character varying', nullable: true })
    fax: string;

    @Column({ name: 'email', type: 'character varying', nullable: true })
    email: string;

    @Column({ name: 'latitud', type: 'character varying', nullable: true })
    latitud: string;

    @Column({ name: 'longitud', type: 'character varying', nullable: true })
    longitud: string;

    @Column({ name: 'fecha_creacion', type: 'date', nullable: true })
    fechaCreacion: Date;

    @Column({ name: 'escudo', type: 'character varying', nullable: true })
    escudo: string;

    @Column({ name: 'imagen', type: 'character varying', nullable: true })
    imagen: string;

    @Column({ name: 'estado_virtual', type: 'character varying', nullable: true })
    estadoVirtual: string;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}