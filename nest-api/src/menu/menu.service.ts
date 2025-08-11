import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { Menu } from './entities/menu.entity';


@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu)
    private readonly menuRepository: Repository<Menu>,
  ) {}

  create(createMenuDto: CreateMenuDto) {
    const newRecord = this.menuRepository.create(createMenuDto);
    return this.menuRepository.save(newRecord);
  }

  findAll() {
    return this.menuRepository.find();
  }

  async findOne(idMenu: number) {
    const record = await this.menuRepository.findOneBy({ [ 'idMenu' ]: idMenu } as any);
    if (!record) {
      throw new NotFoundException(`Menu con ID #${ idMenu } no encontrado`);
    }
    return record;
  }


  async update(idMenu: number, updateMenuDto: UpdateMenuDto) {
    const recordToUpdate = await this.findOne(idMenu);
    if (!recordToUpdate) {
      throw new NotFoundException(`Menu con ID #${ idMenu } no encontrado`);
    }
    const updatedRecord = this.menuRepository.merge(recordToUpdate, updateMenuDto);
    return this.menuRepository.save(updatedRecord);
  }

  async remove(idMenu: number) {
    const record = await this.findOne(idMenu);
    return this.menuRepository.remove(record);
  }
}