import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('tramites_documentos')
export class TramitesDocumento {
    @PrimaryGeneratedColumn({ name: 'id_tramite_documento' })
    idTramiteDocumento: number;

    @Column({ name: 'nombre', type: 'character varying', nullable: true })
    nombre: string;

    @Column({ name: 'descripcion', type: 'character varying', nullable: true })
    descripcion: string;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}