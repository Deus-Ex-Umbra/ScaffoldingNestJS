import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash((createUsuarioDto as any).password, salt);
    const user = this.usuarioRepository.create({ ...createUsuarioDto, password: hashedPassword });
    return this.usuarioRepository.save(user);
  }

  findAll() {
    return this.usuarioRepository.find();
  }

  async findOne(idUsuario: number) {
    const record = await this.usuarioRepository.findOneBy({ [ 'idUsuario' ]: idUsuario } as any);
    if (!record) {
      throw new NotFoundException(`Usuario con ID #${ idUsuario } no encontrado`);
    }
    return record;
  }

  async findByNombreemail(nombreemail: string): Promise<Usuario | undefined> {
    return this.usuarioRepository.findOneBy({ nombreemail });
  }


  async update(idUsuario: number, updateUsuarioDto: UpdateUsuarioDto) {
    const recordToUpdate = await this.findOne(idUsuario);
    if (!recordToUpdate) {
      throw new NotFoundException(`Usuario con ID #${ idUsuario } no encontrado`);
    }
    const updatedRecord = this.usuarioRepository.merge(recordToUpdate, updateUsuarioDto);
    return this.usuarioRepository.save(updatedRecord);
  }

  async remove(idUsuario: number) {
    const record = await this.findOne(idUsuario);
    return this.usuarioRepository.remove(record);
  }
}