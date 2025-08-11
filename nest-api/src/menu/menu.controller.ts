import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('menus')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
  create(@Body() createMenuDto: CreateMenuDto) {
    return this.menuService.create(createMenuDto);
  }

  @Get()
  findAll() {
    return this.menuService.findAll();
  }

  @Get(':id_menu')
  findOne(@Param('id_menu', ParseIntPipe) idMenu: number) {
    return this.menuService.findOne(idMenu);
  }

  @Patch(':id_menu')
  update(@Param('id_menu', ParseIntPipe) idMenu: number, @Body() updateMenuDto: UpdateMenuDto) {
    return this.menuService.update(idMenu, updateMenuDto);
  }

  @Delete(':id_menu')
  remove(@Param('id_menu', ParseIntPipe) idMenu: number) {
    return this.menuService.remove(idMenu);
  }
}