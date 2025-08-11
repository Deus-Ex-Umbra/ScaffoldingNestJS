import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('posgrado_materias')
export class PosgradoMateria {
    @PrimaryGeneratedColumn({ name: 'id_posgrado_materia' })
    idPosgradoMateria: number;

    @Column({ name: 'id_posgrado_programa', type: 'integer', nullable: false })
    idPosgradoPrograma: number;

    @Column({ name: 'id_posgrado_nivel', type: 'integer', nullable: false })
    idPosgradoNivel: number;

    @Column({ name: 'sigla', type: 'character varying', nullable: false })
    sigla: string;

    @Column({ name: 'nombre', type: 'character varying', nullable: false })
    nombre: string;

    @Column({ name: 'nivel_curso', type: 'integer', nullable: true })
    nivelCurso: number;

    @Column({ name: 'cantidad_hora_teorica', type: 'integer', nullable: true })
    cantidadHoraTeorica: number;

    @Column({ name: 'cantidad_hora_practica', type: 'integer', nullable: true })
    cantidadHoraPractica: number;

    @Column({ name: 'cantidad_hora_laboratorio', type: 'integer', nullable: true })
    cantidadHoraLaboratorio: number;

    @Column({ name: 'cantidad_hora_plataforma', type: 'integer', nullable: true })
    cantidadHoraPlataforma: number;

    @Column({ name: 'cantidad_hora_virtual', type: 'integer', nullable: true })
    cantidadHoraVirtual: number;

    @Column({ name: 'cantidad_credito', type: 'integer', nullable: true })
    cantidadCredito: number;

    @Column({ name: 'color', type: 'character varying', nullable: true })
    color: string;

    @Column({ name: 'icono', type: 'character varying', nullable: true })
    icono: string;

    @Column({ name: 'imagen', type: 'character varying', nullable: true })
    imagen: string;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



}