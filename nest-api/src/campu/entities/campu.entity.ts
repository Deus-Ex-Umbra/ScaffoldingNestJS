import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('campus')
export class Campu {
    @PrimaryGeneratedColumn({ name: 'id_campu' })
    idCampu: number;

    @Column({ name: 'nombre', type: 'character varying', nullable: true })
    nombre: string;

    @Column({ name: 'direccion', type: 'character varying', nullable: true })
    direccion: string;

    @Column({ name: 'poligono', type: 'character varying', nullable: true })
    poligono: string;

    @Column({ name: 'latitud', type: 'character varying', nullable: true })
    latitud: string;

    @Column({ name: 'longitud', type: 'character varying', nullable: true })
    longitud: string;

    @Column({ name: 'imagen', type: 'character varying', nullable: true })
    imagen: string;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}