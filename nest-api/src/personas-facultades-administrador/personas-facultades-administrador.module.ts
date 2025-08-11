import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonasFacultadesAdministradorService } from './personas-facultades-administrador.service';
import { PersonasFacultadesAdministradorController } from './personas-facultades-administrador.controller';
import { PersonasFacultadesAdministrador } from './entities/personas-facultades-administrador.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PersonasFacultadesAdministrador])],
  controllers: [PersonasFacultadesAdministradorController],
  providers: [PersonasFacultadesAdministradorService],
  
})
export class PersonasFacultadesAdministradorModule {}