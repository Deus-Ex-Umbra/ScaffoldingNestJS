import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesMenusPrincipalService } from './roles-menus-principal.service';
import { RolesMenusPrincipalController } from './roles-menus-principal.controller';
import { RolesMenusPrincipal } from './entities/roles-menus-principal.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RolesMenusPrincipal])],
  controllers: [RolesMenusPrincipalController],
  providers: [RolesMenusPrincipalService],
  
})
export class RolesMenusPrincipalModule {}