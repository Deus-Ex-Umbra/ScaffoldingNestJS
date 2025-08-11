import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('posgrados_programas')
export class PosgradosPrograma {
    @PrimaryGeneratedColumn({ name: 'id_posgrado_programa' })
    idPosgradoPrograma: number;

    @Column({ name: 'id_nivel_academico', type: 'integer', nullable: false })
    idNivelAcademico: number;

    @Column({ name: 'id_carrera', type: 'integer', nullable: false })
    idCarrera: number;

    @Column({ name: 'gestion', type: 'integer', nullable: true })
    gestion: number;

    @Column({ name: 'nombre', type: 'character varying', nullable: true })
    nombre: string;

    @Column({ name: 'id_modalidad', type: 'integer', nullable: false })
    idModalidad: number;

    @Column({ name: 'fecha_inicio', type: 'date', nullable: true })
    fechaInicio: Date;

    @Column({ name: 'fecha_fin', type: 'date', nullable: true })
    fechaFin: Date;

    @Column({ name: 'fecha_inicio_inscrito', type: 'date', nullable: true })
    fechaInicioInscrito: Date;

    @Column({ name: 'fecha_fin_inscrito', type: 'date', nullable: true })
    fechaFinInscrito: Date;

    @Column({ name: 'numero_max_cuotas', type: 'integer', nullable: true })
    numeroMaxCuotas: number;

    @Column({ name: 'documento', type: 'character varying', nullable: true })
    documento: string;

    @Column({ name: 'costo_total', type: 'double precision', nullable: true })
    costoTotal: number;

    @Column({ name: 'formato_contrato', type: 'text', nullable: true })
    formatoContrato: string;

    @Column({ name: 'formato_contrato_docente', type: 'text', nullable: true })
    formatoContratoDocente: string;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}