import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PosgradoCalificacionService } from './posgrado-calificacion.service';
import { PosgradoCalificacionController } from './posgrado-calificacion.controller';
import { PosgradoCalificacion } from './entities/posgrado-calificacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PosgradoCalificacion])],
  controllers: [PosgradoCalificacionController],
  providers: [PosgradoCalificacionService],
  
})
export class PosgradoCalificacionModule {}