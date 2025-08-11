import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonasDirectoresCarreraService } from './personas-directores-carrera.service';
import { PersonasDirectoresCarreraController } from './personas-directores-carrera.controller';
import { PersonasDirectoresCarrera } from './entities/personas-directores-carrera.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PersonasDirectoresCarrera])],
  controllers: [PersonasDirectoresCarreraController],
  providers: [PersonasDirectoresCarreraService],
  
})
export class PersonasDirectoresCarreraModule {}