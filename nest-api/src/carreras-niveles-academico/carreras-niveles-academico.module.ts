import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarrerasNivelesAcademicoService } from './carreras-niveles-academico.service';
import { CarrerasNivelesAcademicoController } from './carreras-niveles-academico.controller';
import { CarrerasNivelesAcademico } from './entities/carreras-niveles-academico.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CarrerasNivelesAcademico])],
  controllers: [CarrerasNivelesAcademicoController],
  providers: [CarrerasNivelesAcademicoService],
  
})
export class CarrerasNivelesAcademicoModule {}