import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('personas_facultades_administradores')
export class PersonasFacultadesAdministrador {
    @PrimaryGeneratedColumn({ name: 'id_persona_facultad_administrador' })
    idPersonaFacultadAdministrador: number;

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