import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('menus')
export class Menu {
    @PrimaryGeneratedColumn({ name: 'id_menu' })
    idMenu: number;

    @Column({ name: 'id_menu_principal', type: 'integer', nullable: false })
    idMenuPrincipal: number;

    @Column({ name: 'nombre', type: 'character varying', nullable: false })
    nombre: string;

    @Column({ name: 'directorio', type: 'character varying', nullable: false })
    directorio: string;

    @Column({ name: 'icono', type: 'character varying', nullable: true })
    icono: string;

    @Column({ name: 'imagen', type: 'character varying', nullable: true })
    imagen: string;

    @Column({ name: 'color', type: 'character varying', nullable: true })
    color: string;

    @Column({ name: 'orden', type: 'integer', nullable: true })
    orden: number;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}