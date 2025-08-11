import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('grupos_sanguineos')
export class GruposSanguineo {
    @PrimaryGeneratedColumn({ name: 'id_grupo_sanguineo' })
    idGrupoSanguineo: number;

    @Column({ name: 'nombre', type: 'character varying', nullable: false })
    nombre: string;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}