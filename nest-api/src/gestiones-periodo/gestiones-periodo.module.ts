import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GestionesPeriodoService } from './gestiones-periodo.service';
import { GestionesPeriodoController } from './gestiones-periodo.controller';
import { GestionesPeriodo } from './entities/gestiones-periodo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GestionesPeriodo])],
  controllers: [GestionesPeriodoController],
  providers: [GestionesPeriodoService],
  
})
export class GestionesPeriodoModule {}