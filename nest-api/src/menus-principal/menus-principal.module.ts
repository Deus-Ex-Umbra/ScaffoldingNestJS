import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenusPrincipalService } from './menus-principal.service';
import { MenusPrincipalController } from './menus-principal.controller';
import { MenusPrincipal } from './entities/menus-principal.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MenusPrincipal])],
  controllers: [MenusPrincipalController],
  providers: [MenusPrincipalService],
  
})
export class MenusPrincipalModule {}