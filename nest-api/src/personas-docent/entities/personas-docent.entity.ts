import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('personas_docentes')
export class PersonasDocent {
    @PrimaryGeneratedColumn({ name: 'id_persona_docente' })
    idPersonaDocente: number;

    @Column({ name: 'id_persona', type: 'integer', nullable: false })
    idPersona: number;

    @Column({ name: 'fecha_ingreso', type: 'date', nullable: true })
    fechaIngreso: Date;

    @Column({ name: 'fecha', type: 'date', nullable: true })
    fecha: Date;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}