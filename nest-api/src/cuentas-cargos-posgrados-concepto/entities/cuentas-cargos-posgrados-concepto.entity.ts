import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('cuentas_cargos_posgrados_conceptos')
export class CuentasCargosPosgradosConcepto {
    @PrimaryGeneratedColumn({ name: 'id_cuenta_cargo_posgrado_concepto' })
    idCuentaCargoPosgradoConcepto: number;

    @Column({ name: 'id_cuenta_cargo_posgrado', type: 'integer', nullable: false })
    idCuentaCargoPosgrado: number;

    @Column({ name: 'id_cuenta_concepto', type: 'integer', nullable: false })
    idCuentaConcepto: number;

    @Column({ name: 'tiene_descuento', type: 'character varying', nullable: true })
    tieneDescuento: string;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}