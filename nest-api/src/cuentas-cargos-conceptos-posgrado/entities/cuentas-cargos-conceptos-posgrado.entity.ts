import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('cuentas_cargos_conceptos_posgrados')
export class CuentasCargosConceptosPosgrado {
    @PrimaryGeneratedColumn({ name: 'id_cuenta_cargo_concepto_posgrado' })
    idCuentaCargoConceptoPosgrado: number;

    @Column({ name: 'id_cuenta_cargo_posgrado_concepto', type: 'integer', nullable: false })
    idCuentaCargoPosgradoConcepto: number;

    @Column({ name: 'costo', type: 'double precision', nullable: true })
    costo: number;

    @Column({ name: 'porcentaje', type: 'integer', nullable: true })
    porcentaje: number;

    @Column({ name: 'descuento', type: 'double precision', nullable: true })
    descuento: number;

    @Column({ name: 'monto_pagar', type: 'double precision', nullable: true })
    montoPagar: number;

    @Column({ name: 'fecha', type: 'date', nullable: true })
    fecha: Date;

    @Column({ name: 'desglose', type: 'boolean', nullable: true })
    desglose: boolean;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}