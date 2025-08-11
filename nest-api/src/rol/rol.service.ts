import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRolDto } from './dto/create-rol.dto';
import { UpdateRolDto } from './dto/update-rol.dto';
import { Rol } from './entities/rol.entity';


@Injectable()
export class RolService {
  constructor(
    @InjectRepository(Rol)
    private readonly rolRepository: Repository<Rol>,
  ) {}

  create(createRolDto: CreateRolDto) {
    const newRecord = this.rolRepository.create(createRolDto);
    return this.rolRepository.save(newRecord);
  }

  findAll() {
    return this.rolRepository.find();
  }

  async findOne(idRol: number) {
    const record = await this.rolRepository.findOneBy({ [ 'idRol' ]: idRol } as any);
    if (!record) {
      throw new NotFoundException(`Rol con ID #${ idRol } no encontrado`);
    }
    return record;
  }


  async update(idRol: number, updateRolDto: UpdateRolDto) {
    const recordToUpdate = await this.findOne(idRol);
    if (!recordToUpdate) {
      throw new NotFoundException(`Rol con ID #${ idRol } no encontrado`);
    }
    const updatedRecord = this.rolRepository.merge(recordToUpdate, updateRolDto);
    return this.rolRepository.save(updatedRecord);
  }

  async remove(idRol: number) {
    const record = await this.findOne(idRol);
    return this.rolRepository.remove(record);
  }
}