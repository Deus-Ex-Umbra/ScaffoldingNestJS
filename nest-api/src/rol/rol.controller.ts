import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { RolService } from './rol.service';
import { CreateRolDto } from './dto/create-rol.dto';
import { UpdateRolDto } from './dto/update-rol.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('roles')
export class RolController {
  constructor(private readonly rolService: RolService) {}

  @Post()
  create(@Body() createRolDto: CreateRolDto) {
    return this.rolService.create(createRolDto);
  }

  @Get()
  findAll() {
    return this.rolService.findAll();
  }

  @Get(':id_rol')
  findOne(@Param('id_rol', ParseIntPipe) idRol: number) {
    return this.rolService.findOne(idRol);
  }

  @Patch(':id_rol')
  update(@Param('id_rol', ParseIntPipe) idRol: number, @Body() updateRolDto: UpdateRolDto) {
    return this.rolService.update(idRol, updateRolDto);
  }

  @Delete(':id_rol')
  remove(@Param('id_rol', ParseIntPipe) idRol: number) {
    return this.rolService.remove(idRol);
  }
}