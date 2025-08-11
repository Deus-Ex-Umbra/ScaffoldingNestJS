import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('posgrado_calificaciones')
export class PosgradoCalificacion {
    @PrimaryGeneratedColumn({ name: 'id_postgrado_calificacion' })
    idPostgradoCalificacion: number;

    @Column({ name: 'id_persona_alumno_posgrado', type: 'integer', nullable: false })
    idPersonaAlumnoPosgrado: number;

    @Column({ name: 'id_posgrado_asignacion_docente', type: 'integer', nullable: false })
    idPosgradoAsignacionDocente: number;

    @Column({ name: 'tipo_programacion', type: 'integer', nullable: true })
    tipoProgramacion: number;

    @Column({ name: 'control_asistencia', type: 'jsonb', nullable: true })
    controlAsistencia: any;

    @Column({ name: 'configuracion', type: 'jsonb', nullable: true })
    configuracion: any;

    @Column({ name: 'calificacion1', type: 'double precision', nullable: true })
    calificacion1: number;

    @Column({ name: 'calificacion2', type: 'double precision', nullable: true })
    calificacion2: number;

    @Column({ name: 'calificacion3', type: 'double precision', nullable: true })
    calificacion3: number;

    @Column({ name: 'calificacion4', type: 'double precision', nullable: true })
    calificacion4: number;

    @Column({ name: 'calificacion5', type: 'double precision', nullable: true })
    calificacion5: number;

    @Column({ name: 'calificacion6', type: 'double precision', nullable: true })
    calificacion6: number;

    @Column({ name: 'calificacion7', type: 'double precision', nullable: true })
    calificacion7: number;

    @Column({ name: 'calificacion8', type: 'double precision', nullable: true })
    calificacion8: number;

    @Column({ name: 'calificacion9', type: 'double precision', nullable: true })
    calificacion9: number;

    @Column({ name: 'calificacion10', type: 'double precision', nullable: true })
    calificacion10: number;

    @Column({ name: 'calificacion11', type: 'double precision', nullable: true })
    calificacion11: number;

    @Column({ name: 'calificacion12', type: 'double precision', nullable: true })
    calificacion12: number;

    @Column({ name: 'calificacion13', type: 'double precision', nullable: true })
    calificacion13: number;

    @Column({ name: 'calificacion14', type: 'double precision', nullable: true })
    calificacion14: number;

    @Column({ name: 'calificacion15', type: 'double precision', nullable: true })
    calificacion15: number;

    @Column({ name: 'calificacion16', type: 'double precision', nullable: true })
    calificacion16: number;

    @Column({ name: 'calificacion17', type: 'double precision', nullable: true })
    calificacion17: number;

    @Column({ name: 'calificacion18', type: 'double precision', nullable: true })
    calificacion18: number;

    @Column({ name: 'calificacion19', type: 'double precision', nullable: true })
    calificacion19: number;

    @Column({ name: 'calificacion20', type: 'double precision', nullable: true })
    calificacion20: number;

    @Column({ name: 'nota_final', type: 'double precision', nullable: true })
    notaFinal: number;

    @Column({ name: 'nota_2da_instancia', type: 'double precision', nullable: true })
    nota2daInstancia: number;

    @Column({ name: 'nota_examen_mesa', type: 'double precision', nullable: true })
    notaExamenMesa: number;

    @Column({ name: 'observacion', type: 'character varying', nullable: true })
    observacion: string;

    @Column({ name: 'tipo', type: 'character varying', nullable: true })
    tipo: string;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}