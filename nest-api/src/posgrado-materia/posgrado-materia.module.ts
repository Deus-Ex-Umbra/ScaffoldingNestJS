import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PosgradoMateriaService } from './posgrado-materia.service';
import { PosgradoMateriaController } from './posgrado-materia.controller';
import { PosgradoMateria } from './entities/posgrado-materia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PosgradoMateria])],
  controllers: [PosgradoMateriaController],
  providers: [PosgradoMateriaService],
  
})
export class PosgradoMateriaModule {}