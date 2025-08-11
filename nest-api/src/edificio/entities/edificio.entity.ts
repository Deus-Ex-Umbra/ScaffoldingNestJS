import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('edificios')
export class Edificio {
    @PrimaryGeneratedColumn({ name: 'id_edificio' })
    idEdificio: number;

    @Column({ name: 'id_campu', type: 'integer', nullable: true })
    idCampu: number;

    @Column({ name: 'nombre', type: 'character varying', nullable: true })
    nombre: string;

    @Column({ name: 'direccion', type: 'character varying', nullable: true })
    direccion: string;

    @Column({ name: 'latitud', type: 'character varying', nullable: true })
    latitud: string;

    @Column({ name: 'longitud', type: 'character varying', nullable: true })
    longitud: string;

    @Column({ name: 'imagen', type: 'character varying', nullable: true })
    imagen: string;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}