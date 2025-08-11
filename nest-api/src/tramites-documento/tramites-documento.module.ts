import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TramitesDocumentoService } from './tramites-documento.service';
import { TramitesDocumentoController } from './tramites-documento.controller';
import { TramitesDocumento } from './entities/tramites-documento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TramitesDocumento])],
  controllers: [TramitesDocumentoController],
  providers: [TramitesDocumentoService],
  
})
export class TramitesDocumentoModule {}