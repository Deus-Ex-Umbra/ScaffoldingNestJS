import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { ExtractosBancarioService } from './extractos-bancario.service';
import { CreateExtractosBancarioDto } from './dto/create-extractos-bancario.dto';
import { UpdateExtractosBancarioDto } from './dto/update-extractos-bancario.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('extractos_bancarios')
export class ExtractosBancarioController {
  constructor(private readonly extractosBancarioService: ExtractosBancarioService) {}

  @Post()
  create(@Body() createExtractosBancarioDto: CreateExtractosBancarioDto) {
    return this.extractosBancarioService.create(createExtractosBancarioDto);
  }

  @Get()
  findAll() {
    return this.extractosBancarioService.findAll();
  }

  @Get(':id_extracto_bancario')
  findOne(@Param('id_extracto_bancario', ParseIntPipe) idExtractoBancario: number) {
    return this.extractosBancarioService.findOne(idExtractoBancario);
  }

  @Patch(':id_extracto_bancario')
  update(@Param('id_extracto_bancario', ParseIntPipe) idExtractoBancario: number, @Body() updateExtractosBancarioDto: UpdateExtractosBancarioDto) {
    return this.extractosBancarioService.update(idExtractoBancario, updateExtractosBancarioDto);
  }

  @Delete(':id_extracto_bancario')
  remove(@Param('id_extracto_bancario', ParseIntPipe) idExtractoBancario: number) {
    return this.extractosBancarioService.remove(idExtractoBancario);
  }
}