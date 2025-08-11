import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CampuService } from './campu.service';
import { CampuController } from './campu.controller';
import { Campu } from './entities/campu.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Campu])],
  controllers: [CampuController],
  providers: [CampuService],
  
})
export class CampuModule {}