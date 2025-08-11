import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { RolesMenusPrincipalService } from './roles-menus-principal.service';
import { CreateRolesMenusPrincipalDto } from './dto/create-roles-menus-principal.dto';
import { UpdateRolesMenusPrincipalDto } from './dto/update-roles-menus-principal.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('roles_menus_principales')
export class RolesMenusPrincipalController {
  constructor(private readonly rolesMenusPrincipalService: RolesMenusPrincipalService) {}

  @Post()
  create(@Body() createRolesMenusPrincipalDto: CreateRolesMenusPrincipalDto) {
    return this.rolesMenusPrincipalService.create(createRolesMenusPrincipalDto);
  }

  @Get()
  findAll() {
    return this.rolesMenusPrincipalService.findAll();
  }

  @Get(':id_rol_menu_principal')
  findOne(@Param('id_rol_menu_principal', ParseIntPipe) idRolMenuPrincipal: number) {
    return this.rolesMenusPrincipalService.findOne(idRolMenuPrincipal);
  }

  @Patch(':id_rol_menu_principal')
  update(@Param('id_rol_menu_principal', ParseIntPipe) idRolMenuPrincipal: number, @Body() updateRolesMenusPrincipalDto: UpdateRolesMenusPrincipalDto) {
    return this.rolesMenusPrincipalService.update(idRolMenuPrincipal, updateRolesMenusPrincipalDto);
  }

  @Delete(':id_rol_menu_principal')
  remove(@Param('id_rol_menu_principal', ParseIntPipe) idRolMenuPrincipal: number) {
    return this.rolesMenusPrincipalService.remove(idRolMenuPrincipal);
  }
}