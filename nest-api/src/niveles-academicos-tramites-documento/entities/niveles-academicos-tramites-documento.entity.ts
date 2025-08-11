import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('niveles_academicos_tramites_documentos')
export class NivelesAcademicosTramitesDocumento {
    @PrimaryGeneratedColumn({ name: 'id_nivel_academico_tramite_documento' })
    idNivelAcademicoTramiteDocumento: number;

    @Column({ name: 'id_nivel_academico', type: 'integer', nullable: false })
    idNivelAcademico: number;

    @Column({ name: 'id_tramite_documento', type: 'integer', nullable: false })
    idTramiteDocumento: number;

    @Column({ name: 'fecha', type: 'timestamp without time zone', nullable: true })
    fecha: Date;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}