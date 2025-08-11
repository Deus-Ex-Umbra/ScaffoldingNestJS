import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('personas_administrativos')
export class PersonasAdministrativo {
    @PrimaryGeneratedColumn({ name: 'id_persona_administrativo' })
    idPersonaAdministrativo: number;

    @Column({ name: 'id_persona', type: 'integer', nullable: false })
    idPersona: number;

    @Column({ name: 'cargo', type: 'character varying', nullable: true })
    cargo: string;

    @Column({ name: 'fecha', type: 'date', nullable: true })
    fecha: Date;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}