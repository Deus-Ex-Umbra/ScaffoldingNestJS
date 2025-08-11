import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PosgradoTiposEvaluacionesNotaService } from './posgrado-tipos-evaluaciones-nota.service';
import { PosgradoTiposEvaluacionesNotaController } from './posgrado-tipos-evaluaciones-nota.controller';
import { PosgradoTiposEvaluacionesNota } from './entities/posgrado-tipos-evaluaciones-nota.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PosgradoTiposEvaluacionesNota])],
  controllers: [PosgradoTiposEvaluacionesNotaController],
  providers: [PosgradoTiposEvaluacionesNotaService],
  
})
export class PosgradoTiposEvaluacionesNotaModule {}