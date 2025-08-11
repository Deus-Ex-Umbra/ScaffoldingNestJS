import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TiposEvaluacionesNotaService } from './tipos-evaluaciones-nota.service';
import { TiposEvaluacionesNotaController } from './tipos-evaluaciones-nota.controller';
import { TiposEvaluacionesNota } from './entities/tipos-evaluaciones-nota.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TiposEvaluacionesNota])],
  controllers: [TiposEvaluacionesNotaController],
  providers: [TiposEvaluacionesNotaService],
  
})
export class TiposEvaluacionesNotaModule {}