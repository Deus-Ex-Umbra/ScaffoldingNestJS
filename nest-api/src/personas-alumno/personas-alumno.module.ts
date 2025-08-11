import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonasAlumnoService } from './personas-alumno.service';
import { PersonasAlumnoController } from './personas-alumno.controller';
import { PersonasAlumno } from './entities/personas-alumno.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PersonasAlumno])],
  controllers: [PersonasAlumnoController],
  providers: [PersonasAlumnoService],
  
})
export class PersonasAlumnoModule {}