import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('personas_roles')
export class PersonasRol {
    @PrimaryGeneratedColumn({ name: 'id_persona_rol' })
    idPersonaRol: number;

    @Column({ name: 'id_persona', type: 'integer', nullable: false })
    idPersona: number;

    @Column({ name: 'id_rol', type: 'integer', nullable: false })
    idRol: number;

    @Column({ name: 'fecha_asignacion', type: 'date', nullable: true })
    fechaAsignacion: Date;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}