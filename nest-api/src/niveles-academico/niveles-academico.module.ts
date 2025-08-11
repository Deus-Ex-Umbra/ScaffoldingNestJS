import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NivelesAcademicoService } from './niveles-academico.service';
import { NivelesAcademicoController } from './niveles-academico.controller';
import { NivelesAcademico } from './entities/niveles-academico.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NivelesAcademico])],
  controllers: [NivelesAcademicoController],
  providers: [NivelesAcademicoService],
  
})
export class NivelesAcademicoModule {}