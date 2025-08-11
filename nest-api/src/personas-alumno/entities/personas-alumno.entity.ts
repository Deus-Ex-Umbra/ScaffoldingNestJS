import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('personas_alumnos')
export class PersonasAlumno {
    @PrimaryGeneratedColumn({ name: 'id_persona_alumno' })
    idPersonaAlumno: number;

    @Column({ name: 'id_persona', type: 'integer', nullable: false })
    idPersona: number;

    @Column({ name: 'id_carrera', type: 'integer', nullable: false })
    idCarrera: number;

    @Column({ name: 'fecha', type: 'date', nullable: true })
    fecha: Date;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}