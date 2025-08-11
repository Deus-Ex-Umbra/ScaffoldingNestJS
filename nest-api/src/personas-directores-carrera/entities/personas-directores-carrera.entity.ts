import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('personas_directores_carreras')
export class PersonasDirectoresCarrera {
    @PrimaryGeneratedColumn({ name: 'id_persona_director_carrera' })
    idPersonaDirectorCarrera: number;

    @Column({ name: 'id_carrera', type: 'integer', nullable: false })
    idCarrera: number;

    @Column({ name: 'id_persona', type: 'integer', nullable: false })
    idPersona: number;

    @Column({ name: 'fecha_inicio', type: 'date', nullable: true })
    fechaInicio: Date;

    @Column({ name: 'fecha_fin', type: 'date', nullable: true })
    fechaFin: Date;

    @Column({ name: 'resolucion', type: 'character varying', nullable: true })
    resolucion: string;

    @Column({ name: 'firma_digital', type: 'character varying', nullable: true })
    firmaDigital: string;

    @Column({ name: 'observacion', type: 'character varying', nullable: true })
    observacion: string;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}