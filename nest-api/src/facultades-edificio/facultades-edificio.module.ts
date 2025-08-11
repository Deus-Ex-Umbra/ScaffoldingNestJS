import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FacultadesEdificioService } from './facultades-edificio.service';
import { FacultadesEdificioController } from './facultades-edificio.controller';
import { FacultadesEdificio } from './entities/facultades-edificio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FacultadesEdificio])],
  controllers: [FacultadesEdificioController],
  providers: [FacultadesEdificioService],
  
})
export class FacultadesEdificioModule {}