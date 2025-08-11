import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('posgrado_clases_videos')
export class PosgradoClasesVideo {
    @PrimaryGeneratedColumn({ name: 'id_posgrado_clase_video' })
    idPosgradoClaseVideo: number;

    @Column({ name: 'id_posgrado_asignacion_horario', type: 'integer', nullable: false })
    idPosgradoAsignacionHorario: number;

    @Column({ name: 'clase_link', type: 'character varying', nullable: true })
    claseLink: string;

    @Column({ name: 'clase_fecha', type: 'date', nullable: true })
    claseFecha: Date;

    @Column({ name: 'clase_hora_inicio', type: 'timestamp without time zone', nullable: true })
    claseHoraInicio: Date;

    @Column({ name: 'clase_hora_fin', type: 'timestamp without time zone', nullable: true })
    claseHoraFin: Date;

    @Column({ name: 'clase_duracion', type: 'timestamp without time zone', nullable: true })
    claseDuracion: Date;

    @Column({ name: 'fecha_registro', type: 'date', nullable: true })
    fechaRegistro: Date;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}