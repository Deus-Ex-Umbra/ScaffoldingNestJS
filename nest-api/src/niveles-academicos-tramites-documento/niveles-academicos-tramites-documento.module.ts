import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NivelesAcademicosTramitesDocumentoService } from './niveles-academicos-tramites-documento.service';
import { NivelesAcademicosTramitesDocumentoController } from './niveles-academicos-tramites-documento.controller';
import { NivelesAcademicosTramitesDocumento } from './entities/niveles-academicos-tramites-documento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NivelesAcademicosTramitesDocumento])],
  controllers: [NivelesAcademicosTramitesDocumentoController],
  providers: [NivelesAcademicosTramitesDocumentoService],
  
})
export class NivelesAcademicosTramitesDocumentoModule {}