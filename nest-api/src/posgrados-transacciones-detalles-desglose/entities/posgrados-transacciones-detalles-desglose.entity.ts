import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('posgrados_transacciones_detalles_desglose')
export class PosgradosTransaccionesDetallesDesglose {
    @PrimaryGeneratedColumn({ name: 'id_transaccion_desglose' })
    idTransaccionDesglose: number;

    @Column({ name: 'id_posgrado_contrato_detalle', type: 'integer', nullable: false })
    idPosgradoContratoDetalle: number;

    @Column({ name: 'id_posgrado_transaccion_detalle', type: 'integer', nullable: false })
    idPosgradoTransaccionDetalle: number;

    @Column({ name: 'monto_desglosado', type: 'double precision', nullable: true })
    montoDesglosado: number;

    @Column({ name: 'descripcion', type: 'character varying', nullable: true })
    descripcion: string;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}