import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity('usuarios')
export class Usuario {
    @PrimaryGeneratedColumn({ name: 'id_usuario' })
    idUsuario: number;

    @Column({ name: 'id_persona', type: 'integer', nullable: false })
    idPersona: number;

    @Column({ name: 'nombreemail', type: 'character varying', nullable: true })
    nombreemail: string;

    @Column({ name: 'password', type: 'character varying', nullable: true })
    password: string;

    @Column({ name: 'tipo', type: 'integer', nullable: true })
    tipo: number;

    @Column({ name: 'fecha', type: 'date', nullable: true })
    fecha: Date;

    @Column({ name: 'fecha_finalizacion', type: 'date', nullable: true })
    fechaFinalizacion: Date;

    @Column({ name: 'observacion', type: 'character varying', nullable: true })
    observacion: string;

    @Column({ name: 'estado', type: 'character varying', nullable: true })
    estado: string;



    async validatePassword(password: string): Promise<boolean> {
        const { password: hashedPassword } = this;
        return bcrypt.compare(password, hashedPassword);
    }

}