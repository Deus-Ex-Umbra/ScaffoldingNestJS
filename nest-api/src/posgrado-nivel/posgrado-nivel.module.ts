import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PosgradoNivelService } from './posgrado-nivel.service';
import { PosgradoNivelController } from './posgrado-nivel.controller';
import { PosgradoNivel } from './entities/posgrado-nivel.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PosgradoNivel])],
  controllers: [PosgradoNivelController],
  providers: [PosgradoNivelService],
  
})
export class PosgradoNivelModule {}