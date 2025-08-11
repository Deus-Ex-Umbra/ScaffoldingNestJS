import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('paises')
export class Pais {
    @PrimaryGeneratedColumn({ name: 'id_pais' })
    idPais: number;

    @Column({ name: 'nombre', type: 'character varying', nullable: false })
    nombre: string;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}