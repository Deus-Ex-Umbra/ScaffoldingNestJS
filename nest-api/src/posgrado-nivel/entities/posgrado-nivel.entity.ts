import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('posgrado_niveles')
export class PosgradoNivel {
    @PrimaryGeneratedColumn({ name: 'id_posgrado_nivel' })
    idPosgradoNivel: number;

    @Column({ name: 'nombre', type: 'character varying', nullable: false })
    nombre: string;

    @Column({ name: 'descripcion', type: 'character varying', nullable: true })
    descripcion: string;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}