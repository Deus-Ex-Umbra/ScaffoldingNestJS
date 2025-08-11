import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PosgradosProgramaService } from './posgrados-programa.service';
import { PosgradosProgramaController } from './posgrados-programa.controller';
import { PosgradosPrograma } from './entities/posgrados-programa.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PosgradosPrograma])],
  controllers: [PosgradosProgramaController],
  providers: [PosgradosProgramaService],
  
})
export class PosgradosProgramaModule {}