import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('ambientes')
export class Ambient {
    @PrimaryGeneratedColumn({ name: 'id_ambiente' })
    idAmbiente: number;

    @Column({ name: 'id_piso_bloque', type: 'integer', nullable: true })
    idPisoBloque: number;

    @Column({ name: 'id_tipo_ambiente', type: 'integer', nullable: true })
    idTipoAmbiente: number;

    @Column({ name: 'nombre', type: 'character varying', nullable: true })
    nombre: string;

    @Column({ name: 'codigo', type: 'character varying', nullable: true })
    codigo: string;

    @Column({ name: 'capacidad', type: 'integer', nullable: true })
    capacidad: number;

    @Column({ name: 'metro_cuadrado', type: 'double precision', nullable: true })
    metroCuadrado: number;

    @Column({ name: 'imagen_exterior', type: 'character varying', nullable: true })
    imagenExterior: string;

    @Column({ name: 'imagen_interior', type: 'character varying', nullable: true })
    imagenInterior: string;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}