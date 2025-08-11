import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('provincias')
export class Provincia {
    @PrimaryGeneratedColumn({ name: 'id_provincia' })
    idProvincia: number;

    @Column({ name: 'id_departamento', type: 'integer', nullable: false })
    idDepartamento: number;

    @Column({ name: 'nombre', type: 'character varying', nullable: true })
    nombre: string;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}