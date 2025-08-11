import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('posgrado_asignaciones_horarios')
export class PosgradoAsignacionesHorario {
    @PrimaryGeneratedColumn({ name: 'id_posgrado_asignacion_horario' })
    idPosgradoAsignacionHorario: number;

    @Column({ name: 'id_posgrado_asignacion_docente', type: 'integer', nullable: false })
    idPosgradoAsignacionDocente: number;

    @Column({ name: 'id_ambiente', type: 'integer', nullable: false })
    idAmbiente: number;

    @Column({ name: 'id_dia', type: 'integer', nullable: false })
    idDia: number;

    @Column({ name: 'id_hora_clase', type: 'integer', nullable: false })
    idHoraClase: number;

    @Column({ name: 'clase_link', type: 'character varying', nullable: true })
    claseLink: string;

    @Column({ name: 'clase_descripcion', type: 'character varying', nullable: true })
    claseDescripcion: string;

    @Column({ name: 'fecha_registro', type: 'date', nullable: true })
    fechaRegistro: Date;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}