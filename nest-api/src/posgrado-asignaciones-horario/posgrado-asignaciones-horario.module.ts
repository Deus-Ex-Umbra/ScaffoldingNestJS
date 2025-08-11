import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PosgradoAsignacionesHorarioService } from './posgrado-asignaciones-horario.service';
import { PosgradoAsignacionesHorarioController } from './posgrado-asignaciones-horario.controller';
import { PosgradoAsignacionesHorario } from './entities/posgrado-asignaciones-horario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PosgradoAsignacionesHorario])],
  controllers: [PosgradoAsignacionesHorarioController],
  providers: [PosgradoAsignacionesHorarioService],
  
})
export class PosgradoAsignacionesHorarioModule {}