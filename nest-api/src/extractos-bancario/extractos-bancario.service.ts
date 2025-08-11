import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateExtractosBancarioDto } from './dto/create-extractos-bancario.dto';
import { UpdateExtractosBancarioDto } from './dto/update-extractos-bancario.dto';
import { ExtractosBancario } from './entities/extractos-bancario.entity';


@Injectable()
export class ExtractosBancarioService {
  constructor(
    @InjectRepository(ExtractosBancario)
    private readonly extractosBancarioRepository: Repository<ExtractosBancario>,
  ) {}

  create(createExtractosBancarioDto: CreateExtractosBancarioDto) {
    const newRecord = this.extractosBancarioRepository.create(createExtractosBancarioDto);
    return this.extractosBancarioRepository.save(newRecord);
  }

  findAll() {
    return this.extractosBancarioRepository.find();
  }

  async findOne(idExtractoBancario: number) {
    const record = await this.extractosBancarioRepository.findOneBy({ [ 'idExtractoBancario' ]: idExtractoBancario } as any);
    if (!record) {
      throw new NotFoundException(`ExtractosBancario con ID #${ idExtractoBancario } no encontrado`);
    }
    return record;
  }


  async update(idExtractoBancario: number, updateExtractosBancarioDto: UpdateExtractosBancarioDto) {
    const recordToUpdate = await this.findOne(idExtractoBancario);
    if (!recordToUpdate) {
      throw new NotFoundException(`ExtractosBancario con ID #${ idExtractoBancario } no encontrado`);
    }
    const updatedRecord = this.extractosBancarioRepository.merge(recordToUpdate, updateExtractosBancarioDto);
    return this.extractosBancarioRepository.save(updatedRecord);
  }

  async remove(idExtractoBancario: number) {
    const record = await this.findOne(idExtractoBancario);
    return this.extractosBancarioRepository.remove(record);
  }
}