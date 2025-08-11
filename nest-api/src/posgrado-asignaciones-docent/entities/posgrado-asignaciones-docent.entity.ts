import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('posgrado_asignaciones_docentes')
export class PosgradoAsignacionesDocent {
    @PrimaryGeneratedColumn({ name: 'id_posgrado_asignacion_docente' })
    idPosgradoAsignacionDocente: number;

    @Column({ name: 'id_persona_docente', type: 'integer', nullable: false })
    idPersonaDocente: number;

    @Column({ name: 'id_posgrado_materia', type: 'integer', nullable: false })
    idPosgradoMateria: number;

    @Column({ name: 'id_posgrado_tipo_evaluacion_nota', type: 'integer', nullable: true })
    idPosgradoTipoEvaluacionNota: number;

    @Column({ name: 'id_gestion_periodo', type: 'integer', nullable: false })
    idGestionPeriodo: number;

    @Column({ name: 'tipo_calificacion', type: 'character varying', nullable: true })
    tipoCalificacion: string;

    @Column({ name: 'grupo', type: 'character varying', nullable: true })
    grupo: string;

    @Column({ name: 'cupo_maximo_estudiante', type: 'integer', nullable: true })
    cupoMaximoEstudiante: number;

    @Column({ name: 'finaliza_planilla_calificacion', type: 'character varying', nullable: true })
    finalizaPlanillaCalificacion: string;

    @Column({ name: 'fecha_limite_examen_final', type: 'timestamp without time zone', nullable: true })
    fechaLimiteExamenFinal: Date;

    @Column({ name: 'fecha_limite_nota_2da_instancia', type: 'timestamp without time zone', nullable: true })
    fechaLimiteNota2daInstancia: Date;

    @Column({ name: 'fecha_limite_nota_examen_mesa', type: 'timestamp without time zone', nullable: true })
    fechaLimiteNotaExamenMesa: Date;

    @Column({ name: 'fecha_finalizacion_planilla', type: 'timestamp without time zone', nullable: true })
    fechaFinalizacionPlanilla: Date;

    @Column({ name: 'hash', type: 'character varying', nullable: true })
    hash: string;

    @Column({ name: 'codigo_barras', type: 'character varying', nullable: true })
    codigoBarras: string;

    @Column({ name: 'codigo_qr', type: 'character varying', nullable: true })
    codigoQr: string;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}