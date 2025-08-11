import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('posgrados_contratos_detalles_desglose')
export class PosgradosContratosDetallesDesglose {
    @PrimaryGeneratedColumn({ name: 'id_posgrado_desglose' })
    idPosgradoDesglose: number;

    @Column({ name: 'id_posgrado_contrato_detalle', type: 'integer', nullable: false })
    idPosgradoContratoDetalle: number;

    @Column({ name: 'monto', type: 'double precision', nullable: true })
    monto: number;

    @Column({ name: 'descripcion', type: 'character varying', nullable: true })
    descripcion: string;

    @Column({ name: 'pagado', type: 'boolean', nullable: true })
    pagado: boolean;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}