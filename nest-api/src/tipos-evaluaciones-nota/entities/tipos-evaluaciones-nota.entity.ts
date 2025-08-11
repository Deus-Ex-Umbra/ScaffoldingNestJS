import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('tipos_evaluaciones_notas')
export class TiposEvaluacionesNota {
    @PrimaryGeneratedColumn({ name: 'id_tipo_evaluacion_nota' })
    idTipoEvaluacionNota: number;

    @Column({ name: 'nombre', type: 'character varying', nullable: false })
    nombre: string;

    @Column({ name: 'parcial', type: 'integer', nullable: true })
    parcial: number;

    @Column({ name: 'practica', type: 'integer', nullable: true })
    practica: number;

    @Column({ name: 'laboratorio', type: 'integer', nullable: true })
    laboratorio: number;

    @Column({ name: 'examen_final', type: 'integer', nullable: true })
    examenFinal: number;

    @Column({ name: 'nota_minima_aprobacion', type: 'integer', nullable: true })
    notaMinimaAprobacion: number;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}