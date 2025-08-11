import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('gestiones_periodos')
export class GestionesPeriodo {
    @PrimaryGeneratedColumn({ name: 'id_gestion_periodo' })
    idGestionPeriodo: number;

    @Column({ name: 'gestion', type: 'integer', nullable: false })
    gestion: number;

    @Column({ name: 'periodo', type: 'integer', nullable: false })
    periodo: number;

    @Column({ name: 'tipo', type: 'character varying', nullable: false })
    tipo: string;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}