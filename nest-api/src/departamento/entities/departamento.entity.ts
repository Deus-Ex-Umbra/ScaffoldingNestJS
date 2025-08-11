import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('departamentos')
export class Departamento {
    @PrimaryGeneratedColumn({ name: 'id_departamento' })
    idDepartamento: number;

    @Column({ name: 'id_pais', type: 'integer', nullable: false })
    idPais: number;

    @Column({ name: 'nombre', type: 'character varying', nullable: true })
    nombre: string;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}