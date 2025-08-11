import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePosgradoClasesVideoDto } from './dto/create-posgrado-clases-video.dto';
import { UpdatePosgradoClasesVideoDto } from './dto/update-posgrado-clases-video.dto';
import { PosgradoClasesVideo } from './entities/posgrado-clases-video.entity';


@Injectable()
export class PosgradoClasesVideoService {
  constructor(
    @InjectRepository(PosgradoClasesVideo)
    private readonly posgradoClasesVideoRepository: Repository<PosgradoClasesVideo>,
  ) {}

  create(createPosgradoClasesVideoDto: CreatePosgradoClasesVideoDto) {
    const newRecord = this.posgradoClasesVideoRepository.create(createPosgradoClasesVideoDto);
    return this.posgradoClasesVideoRepository.save(newRecord);
  }

  findAll() {
    return this.posgradoClasesVideoRepository.find();
  }

  async findOne(idPosgradoClaseVideo: number) {
    const record = await this.posgradoClasesVideoRepository.findOneBy({ [ 'idPosgradoClaseVideo' ]: idPosgradoClaseVideo } as any);
    if (!record) {
      throw new NotFoundException(`PosgradoClasesVideo con ID #${ idPosgradoClaseVideo } no encontrado`);
    }
    return record;
  }


  async update(idPosgradoClaseVideo: number, updatePosgradoClasesVideoDto: UpdatePosgradoClasesVideoDto) {
    const recordToUpdate = await this.findOne(idPosgradoClaseVideo);
    if (!recordToUpdate) {
      throw new NotFoundException(`PosgradoClasesVideo con ID #${ idPosgradoClaseVideo } no encontrado`);
    }
    const updatedRecord = this.posgradoClasesVideoRepository.merge(recordToUpdate, updatePosgradoClasesVideoDto);
    return this.posgradoClasesVideoRepository.save(updatedRecord);
  }

  async remove(idPosgradoClaseVideo: number) {
    const record = await this.findOne(idPosgradoClaseVideo);
    return this.posgradoClasesVideoRepository.remove(record);
  }
}