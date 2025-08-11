import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRolesMenusPrincipalDto } from './dto/create-roles-menus-principal.dto';
import { UpdateRolesMenusPrincipalDto } from './dto/update-roles-menus-principal.dto';
import { RolesMenusPrincipal } from './entities/roles-menus-principal.entity';


@Injectable()
export class RolesMenusPrincipalService {
  constructor(
    @InjectRepository(RolesMenusPrincipal)
    private readonly rolesMenusPrincipalRepository: Repository<RolesMenusPrincipal>,
  ) {}

  create(createRolesMenusPrincipalDto: CreateRolesMenusPrincipalDto) {
    const newRecord = this.rolesMenusPrincipalRepository.create(createRolesMenusPrincipalDto);
    return this.rolesMenusPrincipalRepository.save(newRecord);
  }

  findAll() {
    return this.rolesMenusPrincipalRepository.find();
  }

  async findOne(idRolMenuPrincipal: number) {
    const record = await this.rolesMenusPrincipalRepository.findOneBy({ [ 'idRolMenuPrincipal' ]: idRolMenuPrincipal } as any);
    if (!record) {
      throw new NotFoundException(`RolesMenusPrincipal con ID #${ idRolMenuPrincipal } no encontrado`);
    }
    return record;
  }


  async update(idRolMenuPrincipal: number, updateRolesMenusPrincipalDto: UpdateRolesMenusPrincipalDto) {
    const recordToUpdate = await this.findOne(idRolMenuPrincipal);
    if (!recordToUpdate) {
      throw new NotFoundException(`RolesMenusPrincipal con ID #${ idRolMenuPrincipal } no encontrado`);
    }
    const updatedRecord = this.rolesMenusPrincipalRepository.merge(recordToUpdate, updateRolesMenusPrincipalDto);
    return this.rolesMenusPrincipalRepository.save(updatedRecord);
  }

  async remove(idRolMenuPrincipal: number) {
    const record = await this.findOne(idRolMenuPrincipal);
    return this.rolesMenusPrincipalRepository.remove(record);
  }
}