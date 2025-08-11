import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PosgradoAlumnosDocumentoService } from './posgrado-alumnos-documento.service';
import { PosgradoAlumnosDocumentoController } from './posgrado-alumnos-documento.controller';
import { PosgradoAlumnosDocumento } from './entities/posgrado-alumnos-documento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PosgradoAlumnosDocumento])],
  controllers: [PosgradoAlumnosDocumentoController],
  providers: [PosgradoAlumnosDocumentoService],
  
})
export class PosgradoAlumnosDocumentoModule {}