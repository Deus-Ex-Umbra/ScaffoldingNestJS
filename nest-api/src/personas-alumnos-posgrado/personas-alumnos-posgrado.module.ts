import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonasAlumnosPosgradoService } from './personas-alumnos-posgrado.service';
import { PersonasAlumnosPosgradoController } from './personas-alumnos-posgrado.controller';
import { PersonasAlumnosPosgrado } from './entities/personas-alumnos-posgrado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PersonasAlumnosPosgrado])],
  controllers: [PersonasAlumnosPosgradoController],
  providers: [PersonasAlumnosPosgradoService],
  
})
export class PersonasAlumnosPosgradoModule {}