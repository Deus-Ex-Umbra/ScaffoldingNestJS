import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('menus_principales')
export class MenusPrincipal {
    @PrimaryGeneratedColumn({ name: 'id_menu_principal' })
    idMenuPrincipal: number;

    @Column({ name: 'id_modulo', type: 'integer', nullable: false })
    idModulo: number;

    @Column({ name: 'nombre', type: 'character varying', nullable: false })
    nombre: string;

    @Column({ name: 'icono', type: 'character varying', nullable: true })
    icono: string;

    @Column({ name: 'orden', type: 'integer', nullable: true })
    orden: number;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}