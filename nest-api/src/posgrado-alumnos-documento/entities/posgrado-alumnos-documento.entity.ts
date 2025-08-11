import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('posgrado_alumnos_documentos')
export class PosgradoAlumnosDocumento {
    @PrimaryGeneratedColumn({ name: 'id_posgrado_alumno_documento' })
    idPosgradoAlumnoDocumento: number;

    @Column({ name: 'id_persona_alumno_posgrado', type: 'integer', nullable: false })
    idPersonaAlumnoPosgrado: number;

    @Column({ name: 'id_nivel_academico_tramite_documento', type: 'integer', nullable: false })
    idNivelAcademicoTramiteDocumento: number;

    @Column({ name: 'fecha_subida', type: 'timestamp without time zone', nullable: true })
    fechaSubida: Date;

    @Column({ name: 'archivo', type: 'character varying', nullable: true })
    archivo: string;

    @Column({ name: 'verificado', type: 'character varying', nullable: true })
    verificado: string;

    @Column({ name: 'fecha_verificacion', type: 'timestamp without time zone', nullable: true })
    fechaVerificacion: Date;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}