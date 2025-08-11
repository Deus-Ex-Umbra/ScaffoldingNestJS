import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('facultades_edificios')
export class FacultadesEdificio {
    @PrimaryGeneratedColumn({ name: 'id_facultad_edificio' })
    idFacultadEdificio: number;

    @Column({ name: 'id_facultad', type: 'integer', nullable: true })
    idFacultad: number;

    @Column({ name: 'id_edificio', type: 'integer', nullable: true })
    idEdificio: number;

    @Column({ name: 'fecha_asignacion', type: 'date', nullable: true })
    fechaAsignacion: Date;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}