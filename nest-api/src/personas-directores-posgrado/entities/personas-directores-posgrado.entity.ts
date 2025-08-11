import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('personas_directores_posgrados')
export class PersonasDirectoresPosgrado {
    @PrimaryGeneratedColumn({ name: 'id_persona_director_posgrado' })
    idPersonaDirectorPosgrado: number;

    @Column({ name: 'id_persona', type: 'integer', nullable: false })
    idPersona: number;

    @Column({ name: 'fecha_inicio', type: 'date', nullable: true })
    fechaInicio: Date;

    @Column({ name: 'fecha_fin', type: 'date', nullable: true })
    fechaFin: Date;

    @Column({ name: 'firma_digital', type: 'character varying', nullable: true })
    firmaDigital: string;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}