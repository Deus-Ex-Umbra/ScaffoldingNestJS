import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('posgrado_tipos_evaluaciones_notas')
export class PosgradoTiposEvaluacionesNota {
    @PrimaryGeneratedColumn({ name: 'id_posgrado_tipo_evaluacion_nota' })
    idPosgradoTipoEvaluacionNota: number;

    @Column({ name: 'nombre', type: 'character varying', nullable: false })
    nombre: string;

    @Column({ name: 'configuracion', type: 'json', nullable: false })
    configuracion: any;

    @Column({ name: 'nota_minima_aprobacion', type: 'integer', nullable: true })
    notaMinimaAprobacion: number;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}