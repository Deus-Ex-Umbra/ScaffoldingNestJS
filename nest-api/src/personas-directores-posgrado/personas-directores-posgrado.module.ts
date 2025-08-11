import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonasDirectoresPosgradoService } from './personas-directores-posgrado.service';
import { PersonasDirectoresPosgradoController } from './personas-directores-posgrado.controller';
import { PersonasDirectoresPosgrado } from './entities/personas-directores-posgrado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PersonasDirectoresPosgrado])],
  controllers: [PersonasDirectoresPosgradoController],
  providers: [PersonasDirectoresPosgradoService],
  
})
export class PersonasDirectoresPosgradoModule {}