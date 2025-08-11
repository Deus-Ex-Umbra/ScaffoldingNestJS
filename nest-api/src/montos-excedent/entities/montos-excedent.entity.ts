import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('montos_excedentes')
export class MontosExcedent {
    @PrimaryGeneratedColumn({ name: 'id_monto_exedente' })
    idMontoExedente: number;

    @Column({ name: 'id_posgrado_transaccion_detalle', type: 'integer', nullable: false })
    idPosgradoTransaccionDetalle: number;

    @Column({ name: 'monto_excedente', type: 'double precision', nullable: true })
    montoExcedente: number;

    @Column({ name: 'procesando', type: 'character varying', nullable: true })
    procesando: string;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}