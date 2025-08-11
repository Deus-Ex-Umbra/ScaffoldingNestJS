import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('posgrados_contratos_detalles')
export class PosgradosContratosDetall {
    @PrimaryGeneratedColumn({ name: 'id_posgrado_contrato_detalle' })
    idPosgradoContratoDetalle: number;

    @Column({ name: 'id_posgrado_contrato', type: 'integer', nullable: false })
    idPosgradoContrato: number;

    @Column({ name: 'id_cuenta_cargo_concepto_posgrado', type: 'integer', nullable: false })
    idCuentaCargoConceptoPosgrado: number;

    @Column({ name: 'pagado', type: 'boolean', nullable: true })
    pagado: boolean;

    @Column({ name: 'monto_pagado', type: 'double precision', nullable: true })
    montoPagado: number;

    @Column({ name: 'monto_adeudado', type: 'double precision', nullable: true })
    montoAdeudado: number;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}