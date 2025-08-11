import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Create{{ table.className }}Dto } from './dto/create-{{ table.fileName }}.dto';
import { Update{{ table.className }}Dto } from './dto/update-{{ table.fileName }}.dto';
import { {{ table.className }} } from './entities/{{ table.fileName }}.entity';
{{ table.bcryptImport }}

@Injectable()
export class {{ table.className }}Service {
  constructor(
    @InjectRepository({{ table.className }})
    private readonly {{ table.camelCaseName }}Repository: Repository<{{ table.className }}>,
  ) {}

{{ table.createMethod }}

  findAll() {
    return this.{{ table.camelCaseName }}Repository.find();
  }

  async findOne({{ table.primaryKey.camelCaseName }}: {{ table.primaryKey.tsType }}) {
    const record = await this.{{ table.camelCaseName }}Repository.findOneBy({ [ '{{ table.primaryKey.camelCaseName }}' ]: {{ table.primaryKey.camelCaseName }} } as any);
    if (!record) {
      throw new NotFoundException(`{{ table.className }} con ID #${ {{ table.primaryKey.camelCaseName }} } no encontrado`);
    }
    return record;
  }
{{ table.findByNameMethod }}

  async update({{ table.primaryKey.camelCaseName }}: {{ table.primaryKey.tsType }}, update{{ table.className }}Dto: Update{{ table.className }}Dto) {
    const recordToUpdate = await this.findOne({{ table.primaryKey.camelCaseName }});
    if (!recordToUpdate) {
      throw new NotFoundException(`{{ table.className }} con ID #${ {{ table.primaryKey.camelCaseName }} } no encontrado`);
    }
    const updatedRecord = this.{{ table.camelCaseName }}Repository.merge(recordToUpdate, update{{ table.className }}Dto);
    return this.{{ table.camelCaseName }}Repository.save(updatedRecord);
  }

  async remove({{ table.primaryKey.camelCaseName }}: {{ table.primaryKey.tsType }}) {
    const record = await this.findOne({{ table.primaryKey.camelCaseName }});
    return this.{{ table.camelCaseName }}Repository.remove(record);
  }
}