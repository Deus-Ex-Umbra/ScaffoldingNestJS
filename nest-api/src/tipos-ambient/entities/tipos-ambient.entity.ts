import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('tipos_ambientes')
export class TiposAmbient {
    @PrimaryGeneratedColumn({ name: 'id_tipo_ambiente' })
    idTipoAmbiente: number;

    @Column({ name: 'nombre', type: 'character varying', nullable: true })
    nombre: string;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}