import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('bloques')
export class Bloqu {
    @PrimaryGeneratedColumn({ name: 'id_bloque' })
    idBloque: number;

    @Column({ name: 'id_edificio', type: 'integer', nullable: true })
    idEdificio: number;

    @Column({ name: 'nombre', type: 'character varying', nullable: true })
    nombre: string;

    @Column({ name: 'imagen', type: 'character varying', nullable: true })
    imagen: string;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}