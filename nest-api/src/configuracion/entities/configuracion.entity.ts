import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('configuraciones')
export class Configuracion {
    @PrimaryGeneratedColumn({ name: 'id_configuracion' })
    idConfiguracion: number;

    @Column({ name: 'id_universidad', type: 'integer', nullable: false })
    idUniversidad: number;

    @Column({ name: 'tipo', type: 'character varying', nullable: true })
    tipo: string;

    @Column({ name: 'descripcion', type: 'character varying', nullable: true })
    descripcion: string;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}