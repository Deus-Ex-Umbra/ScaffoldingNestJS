import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMenusPrincipalDto } from './dto/create-menus-principal.dto';
import { UpdateMenusPrincipalDto } from './dto/update-menus-principal.dto';
import { MenusPrincipal } from './entities/menus-principal.entity';


@Injectable()
export class MenusPrincipalService {
  constructor(
    @InjectRepository(MenusPrincipal)
    private readonly menusPrincipalRepository: Repository<MenusPrincipal>,
  ) {}

  create(createMenusPrincipalDto: CreateMenusPrincipalDto) {
    const newRecord = this.menusPrincipalRepository.create(createMenusPrincipalDto);
    return this.menusPrincipalRepository.save(newRecord);
  }

  findAll() {
    return this.menusPrincipalRepository.find();
  }

  async findOne(idMenuPrincipal: number) {
    const record = await this.menusPrincipalRepository.findOneBy({ [ 'idMenuPrincipal' ]: idMenuPrincipal } as any);
    if (!record) {
      throw new NotFoundException(`MenusPrincipal con ID #${ idMenuPrincipal } no encontrado`);
    }
    return record;
  }


  async update(idMenuPrincipal: number, updateMenusPrincipalDto: UpdateMenusPrincipalDto) {
    const recordToUpdate = await this.findOne(idMenuPrincipal);
    if (!recordToUpdate) {
      throw new NotFoundException(`MenusPrincipal con ID #${ idMenuPrincipal } no encontrado`);
    }
    const updatedRecord = this.menusPrincipalRepository.merge(recordToUpdate, updateMenusPrincipalDto);
    return this.menusPrincipalRepository.save(updatedRecord);
  }

  async remove(idMenuPrincipal: number) {
    const record = await this.findOne(idMenuPrincipal);
    return this.menusPrincipalRepository.remove(record);
  }
}