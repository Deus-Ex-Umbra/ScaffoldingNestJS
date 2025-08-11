import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('roles_menus_principales')
export class RolesMenusPrincipal {
    @PrimaryGeneratedColumn({ name: 'id_rol_menu_principal' })
    idRolMenuPrincipal: number;

    @Column({ name: 'id_rol', type: 'integer', nullable: false })
    idRol: number;

    @Column({ name: 'id_menu_principal', type: 'integer', nullable: false })
    idMenuPrincipal: number;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}