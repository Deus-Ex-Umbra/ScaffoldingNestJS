import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('horas_clases')
export class HorasClas {
    @PrimaryGeneratedColumn({ name: 'id_hora_clase' })
    idHoraClase: number;

    @Column({ name: 'numero', type: 'integer', nullable: true })
    numero: number;

    @Column({ name: 'hora_inicio', type: 'time without time zone', nullable: true })
    horaInicio: Date;

    @Column({ name: 'hora_fin', type: 'time without time zone', nullable: true })
    horaFin: Date;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}