import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('posgrados_transacciones')
export class PosgradosTransaccion {
    @PrimaryGeneratedColumn({ name: 'id_posgrado_transaccion' })
    idPosgradoTransaccion: number;

    @Column({ name: 'id_posgrado_contrato', type: 'integer', nullable: false })
    idPosgradoContrato: number;

    @Column({ name: 'id_persona_alumno_posgrado', type: 'integer', nullable: false })
    idPersonaAlumnoPosgrado: number;

    @Column({ name: 'fecha_transaccion', type: 'date', nullable: true })
    fechaTransaccion: Date;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}