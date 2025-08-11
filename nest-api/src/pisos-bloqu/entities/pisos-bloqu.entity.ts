import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('pisos_bloques')
export class PisosBloqu {
    @PrimaryGeneratedColumn({ name: 'id_piso_bloque' })
    idPisoBloque: number;

    @Column({ name: 'id_bloque', type: 'integer', nullable: true })
    idBloque: number;

    @Column({ name: 'id_piso', type: 'integer', nullable: true })
    idPiso: number;

    @Column({ name: 'nombre', type: 'character varying', nullable: true })
    nombre: string;

    @Column({ name: 'cantidad_ambientes', type: 'integer', nullable: true })
    cantidadAmbientes: number;

    @Column({ name: 'imagen', type: 'character varying', nullable: true })
    imagen: string;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}