import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('cuentas_cargos_posgrados')
export class CuentasCargosPosgrado {
    @PrimaryGeneratedColumn({ name: 'id_cuenta_cargo_posgrado' })
    idCuentaCargoPosgrado: number;

    @Column({ name: 'id_posgrado_programa', type: 'integer', nullable: false })
    idPosgradoPrograma: number;

    @Column({ name: 'nombre', type: 'character varying', nullable: true })
    nombre: string;

    @Column({ name: 'numero_formulario', type: 'character varying', nullable: true })
    numeroFormulario: string;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}