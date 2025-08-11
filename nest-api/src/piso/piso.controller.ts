import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { PisoService } from './piso.service';
import { CreatePisoDto } from './dto/create-piso.dto';
import { UpdatePisoDto } from './dto/update-piso.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('pisos')
export class PisoController {
  constructor(private readonly pisoService: PisoService) {}

  @Post()
  create(@Body() createPisoDto: CreatePisoDto) {
    return this.pisoService.create(createPisoDto);
  }

  @Get()
  findAll() {
    return this.pisoService.findAll();
  }

  @Get(':id_piso')
  findOne(@Param('id_piso', ParseIntPipe) idPiso: number) {
    return this.pisoService.findOne(idPiso);
  }

  @Patch(':id_piso')
  update(@Param('id_piso', ParseIntPipe) idPiso: number, @Body() updatePisoDto: UpdatePisoDto) {
    return this.pisoService.update(idPiso, updatePisoDto);
  }

  @Delete(':id_piso')
  remove(@Param('id_piso', ParseIntPipe) idPiso: number) {
    return this.pisoService.remove(idPiso);
  }
}