import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('posgrados_contratos')
export class PosgradosContrato {
    @PrimaryGeneratedColumn({ name: 'id_posgrado_contrato' })
    idPosgradoContrato: number;

    @Column({ name: 'id_cuenta_cargo_posgrado', type: 'integer', nullable: false })
    idCuentaCargoPosgrado: number;

    @Column({ name: 'id_persona_alumno_posgrado', type: 'integer', nullable: false })
    idPersonaAlumnoPosgrado: number;

    @Column({ name: 'numero_cuotas', type: 'integer', nullable: true })
    numeroCuotas: number;

    @Column({ name: 'id_persona_director_posgrado', type: 'integer', nullable: false })
    idPersonaDirectorPosgrado: number;

    @Column({ name: 'id_persona_facultad_administrador', type: 'integer', nullable: false })
    idPersonaFacultadAdministrador: number;

    @Column({ name: 'id_persona_decano', type: 'integer', nullable: false })
    idPersonaDecano: number;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}