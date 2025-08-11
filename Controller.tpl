import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { {{ table.className }}Service } from './{{ table.fileName }}.service';
import { Create{{ table.className }}Dto } from './dto/create-{{ table.fileName }}.dto';
import { Update{{ table.className }}Dto } from './dto/update-{{ table.fileName }}.dto';
## if table.isProtected
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
## endif

## if table.isProtected
@UseGuards(JwtAuthGuard)
## endif
@Controller('{{ table.name }}')
export class {{ table.className }}Controller {
  constructor(private readonly {{ table.camelCaseName }}Service: {{ table.className }}Service) {}

  @Post()
  create(@Body() create{{ table.className }}Dto: Create{{ table.className }}Dto) {
    return this.{{ table.camelCaseName }}Service.create(create{{ table.className }}Dto);
  }

  @Get()
  findAll() {
    return this.{{ table.camelCaseName }}Service.findAll();
  }

  @Get(':{{ table.primaryKey.name }}')
  findOne(@Param('{{ table.primaryKey.name }}', ParseIntPipe) {{ table.primaryKey.camelCaseName }}: {{ table.primaryKey.tsType }}) {
    return this.{{ table.camelCaseName }}Service.findOne({{ table.primaryKey.camelCaseName }});
  }

  @Patch(':{{ table.primaryKey.name }}')
  update(@Param('{{ table.primaryKey.name }}', ParseIntPipe) {{ table.primaryKey.camelCaseName }}: {{ table.primaryKey.tsType }}, @Body() update{{ table.className }}Dto: Update{{ table.className }}Dto) {
    return this.{{ table.camelCaseName }}Service.update({{ table.primaryKey.camelCaseName }}, update{{ table.className }}Dto);
  }

  @Delete(':{{ table.primaryKey.name }}')
  remove(@Param('{{ table.primaryKey.name }}', ParseIntPipe) {{ table.primaryKey.camelCaseName }}: {{ table.primaryKey.tsType }}) {
    return this.{{ table.camelCaseName }}Service.remove({{ table.primaryKey.camelCaseName }});
  }
}