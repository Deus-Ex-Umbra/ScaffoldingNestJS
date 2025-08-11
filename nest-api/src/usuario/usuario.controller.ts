import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }

  @Get()
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get(':id_usuario')
  findOne(@Param('id_usuario', ParseIntPipe) idUsuario: number) {
    return this.usuarioService.findOne(idUsuario);
  }

  @Patch(':id_usuario')
  update(@Param('id_usuario', ParseIntPipe) idUsuario: number, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(idUsuario, updateUsuarioDto);
  }

  @Delete(':id_usuario')
  remove(@Param('id_usuario', ParseIntPipe) idUsuario: number) {
    return this.usuarioService.remove(idUsuario);
  }
}