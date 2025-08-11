import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PosgradoAsignacionesDocentService } from './posgrado-asignaciones-docent.service';
import { PosgradoAsignacionesDocentController } from './posgrado-asignaciones-docent.controller';
import { PosgradoAsignacionesDocent } from './entities/posgrado-asignaciones-docent.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PosgradoAsignacionesDocent])],
  controllers: [PosgradoAsignacionesDocentController],
  providers: [PosgradoAsignacionesDocentService],
  
})
export class PosgradoAsignacionesDocentModule {}