import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('estados_civiles')
export class EstadosCivil {
    @PrimaryGeneratedColumn({ name: 'id_estado_civil' })
    idEstadoCivil: number;

    @Column({ name: 'nombre', type: 'character varying', nullable: false })
    nombre: string;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}