import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHorasClasDto } from './dto/create-horas-clas.dto';
import { UpdateHorasClasDto } from './dto/update-horas-clas.dto';
import { HorasClas } from './entities/horas-clas.entity';


@Injectable()
export class HorasClasService {
  constructor(
    @InjectRepository(HorasClas)
    private readonly horasClasRepository: Repository<HorasClas>,
  ) {}

  create(createHorasClasDto: CreateHorasClasDto) {
    const newRecord = this.horasClasRepository.create(createHorasClasDto);
    return this.horasClasRepository.save(newRecord);
  }

  findAll() {
    return this.horasClasRepository.find();
  }

  async findOne(idHoraClase: number) {
    const record = await this.horasClasRepository.findOneBy({ [ 'idHoraClase' ]: idHoraClase } as any);
    if (!record) {
      throw new NotFoundException(`HorasClas con ID #${ idHoraClase } no encontrado`);
    }
    return record;
  }


  async update(idHoraClase: number, updateHorasClasDto: UpdateHorasClasDto) {
    const recordToUpdate = await this.findOne(idHoraClase);
    if (!recordToUpdate) {
      throw new NotFoundException(`HorasClas con ID #${ idHoraClase } no encontrado`);
    }
    const updatedRecord = this.horasClasRepository.merge(recordToUpdate, updateHorasClasDto);
    return this.horasClasRepository.save(updatedRecord);
  }

  async remove(idHoraClase: number) {
    const record = await this.findOne(idHoraClase);
    return this.horasClasRepository.remove(record);
  }
}