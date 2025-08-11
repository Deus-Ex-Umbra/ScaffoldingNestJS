import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('tipos_personas')
export class TiposPersona {
    @PrimaryGeneratedColumn({ name: 'id_tipo_persona' })
    idTipoPersona: number;

    @Column({ name: 'id_persona', type: 'integer', nullable: false })
    idPersona: number;

    @Column({ name: 'id_rol', type: 'integer', nullable: false })
    idRol: number;

    @Column({ name: 'tipo', type: 'character varying', nullable: true })
    tipo: string;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}