import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('personas')
export class Persona {
    @PrimaryGeneratedColumn({ name: 'id_persona' })
    idPersona: number;

    @Column({ name: 'id_localidad', type: 'integer', nullable: false })
    idLocalidad: number;

    @Column({ name: 'numero_identificacion_personal', type: 'character varying', nullable: true })
    numeroIdentificacionPersonal: string;

    @Column({ name: 'id_emision_cedula', type: 'integer', nullable: false })
    idEmisionCedula: number;

    @Column({ name: 'paterno', type: 'character varying', nullable: false })
    paterno: string;

    @Column({ name: 'materno', type: 'character varying', nullable: true })
    materno: string;

    @Column({ name: 'nombre', type: 'character varying', nullable: false })
    nombre: string;

    @Column({ name: 'id_sexo', type: 'integer', nullable: false })
    idSexo: number;

    @Column({ name: 'id_grupo_sanguineo', type: 'integer', nullable: false })
    idGrupoSanguineo: number;

    @Column({ name: 'fecha_nacimiento', type: 'date', nullable: true })
    fechaNacimiento: Date;

    @Column({ name: 'direccion', type: 'character varying', nullable: true })
    direccion: string;

    @Column({ name: 'latitud', type: 'character varying', nullable: true })
    latitud: string;

    @Column({ name: 'longitud', type: 'character varying', nullable: true })
    longitud: string;

    @Column({ name: 'telefono_celular', type: 'character varying', nullable: true })
    telefonoCelular: string;

    @Column({ name: 'telefono_fijo', type: 'character varying', nullable: true })
    telefonoFijo: string;

    @Column({ name: 'zona', type: 'character varying', nullable: true })
    zona: string;

    @Column({ name: 'id_estado_civil', type: 'integer', nullable: false })
    idEstadoCivil: number;

    @Column({ name: 'email', type: 'character varying', nullable: true })
    email: string;

    @Column({ name: 'fotografia', type: 'character varying', nullable: true })
    fotografia: string;

    @Column({ name: 'abreviacion_titulo', type: 'character varying', nullable: true })
    abreviacionTitulo: string;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}