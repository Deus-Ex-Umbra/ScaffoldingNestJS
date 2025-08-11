import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { {{ table.className }}Service } from './{{ table.fileName }}.service';
import { {{ table.className }}Controller } from './{{ table.fileName }}.controller';
import { {{ table.className }} } from './entities/{{ table.fileName }}.entity';

@Module({
  imports: [TypeOrmModule.forFeature([{{ table.className }}])],
  controllers: [{{ table.className }}Controller],
  providers: [{{ table.className }}Service],
  {{ table.exportsLine }}
})
export class {{ table.className }}Module {}