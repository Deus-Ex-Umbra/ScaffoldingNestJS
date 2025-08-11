import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('posgrados_transacciones_detalles')
export class PosgradosTransaccionesDetall {
    @PrimaryGeneratedColumn({ name: 'id_posgrado_transaccion_detalle' })
    idPosgradoTransaccionDetalle: number;

    @Column({ name: 'id_posgrado_transaccion', type: 'integer', nullable: false })
    idPosgradoTransaccion: number;

    @Column({ name: 'id_posgrado_contrato_detalle', type: 'integer', nullable: false })
    idPosgradoContratoDetalle: number;

    @Column({ name: 'fecha_deposito', type: 'date', nullable: true })
    fechaDeposito: Date;

    @Column({ name: 'numero_deposito', type: 'character varying', nullable: true })
    numeroDeposito: string;

    @Column({ name: 'monto_deposito', type: 'double precision', nullable: true })
    montoDeposito: number;

    @Column({ name: 'fotografia_deposito', type: 'character varying', nullable: true })
    fotografiaDeposito: string;

    @Column({ name: 'usado_transaccion', type: 'character varying', nullable: true })
    usadoTransaccion: string;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}