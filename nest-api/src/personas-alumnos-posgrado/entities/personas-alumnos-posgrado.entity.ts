import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('personas_alumnos_posgrados')
export class PersonasAlumnosPosgrado {
    @PrimaryGeneratedColumn({ name: 'id_persona_alumno_posgrado' })
    idPersonaAlumnoPosgrado: number;

    @Column({ name: 'id_persona', type: 'integer', nullable: false })
    idPersona: number;

    @Column({ name: 'id_posgrado_programa', type: 'integer', nullable: false })
    idPosgradoPrograma: number;

    @Column({ name: 'fecha', type: 'date', nullable: true })
    fecha: Date;

    @Column({ name: 'inscrito', type: 'character varying', nullable: true })
    inscrito: string;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}