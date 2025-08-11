import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('localidades')
export class Localidad {
    @PrimaryGeneratedColumn({ name: 'id_localidad' })
    idLocalidad: number;

    @Column({ name: 'id_provincia', type: 'integer', nullable: false })
    idProvincia: number;

    @Column({ name: 'nombre', type: 'character varying', nullable: false })
    nombre: string;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}