import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('extractos_bancarios')
export class ExtractosBancario {
    @PrimaryGeneratedColumn({ name: 'id_extracto_bancario' })
    idExtractoBancario: number;

    @Column({ name: 'nombre_completo', type: 'character varying', nullable: true })
    nombreCompleto: string;

    @Column({ name: 'carnet_identidad', type: 'character varying', nullable: true })
    carnetIdentidad: string;

    @Column({ name: 'numero_codigo', type: 'character varying', nullable: true })
    numeroCodigo: string;

    @Column({ name: 'monto', type: 'double precision', nullable: true })
    monto: number;

    @Column({ name: 'fecha', type: 'date', nullable: true })
    fecha: Date;

    @Column({ name: 'hora', type: 'time without time zone', nullable: true })
    hora: Date;

    @Column({ name: 'procesando', type: 'character varying', nullable: true })
    procesando: string;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}