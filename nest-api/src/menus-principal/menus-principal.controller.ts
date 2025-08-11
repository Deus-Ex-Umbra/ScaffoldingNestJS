import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { MenusPrincipalService } from './menus-principal.service';
import { CreateMenusPrincipalDto } from './dto/create-menus-principal.dto';
import { UpdateMenusPrincipalDto } from './dto/update-menus-principal.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('menus_principales')
export class MenusPrincipalController {
  constructor(private readonly menusPrincipalService: MenusPrincipalService) {}

  @Post()
  create(@Body() createMenusPrincipalDto: CreateMenusPrincipalDto) {
    return this.menusPrincipalService.create(createMenusPrincipalDto);
  }

  @Get()
  findAll() {
    return this.menusPrincipalService.findAll();
  }

  @Get(':id_menu_principal')
  findOne(@Param('id_menu_principal', ParseIntPipe) idMenuPrincipal: number) {
    return this.menusPrincipalService.findOne(idMenuPrincipal);
  }

  @Patch(':id_menu_principal')
  update(@Param('id_menu_principal', ParseIntPipe) idMenuPrincipal: number, @Body() updateMenusPrincipalDto: UpdateMenusPrincipalDto) {
    return this.menusPrincipalService.update(idMenuPrincipal, updateMenusPrincipalDto);
  }

  @Delete(':id_menu_principal')
  remove(@Param('id_menu_principal', ParseIntPipe) idMenuPrincipal: number) {
    return this.menusPrincipalService.remove(idMenuPrincipal);
  }
}