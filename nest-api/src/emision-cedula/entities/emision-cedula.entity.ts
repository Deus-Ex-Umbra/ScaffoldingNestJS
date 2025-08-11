import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('emision_cedulas')
export class EmisionCedula {
    @PrimaryGeneratedColumn({ name: 'id_emision_cedula' })
    idEmisionCedula: number;

    @Column({ name: 'nombre', type: 'character varying', nullable: false })
    nombre: string;

    @Column({ name: 'descripcion', type: 'character varying', nullable: true })
    descripcion: string;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}