import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TiposPersonaService } from './tipos-persona.service';
import { TiposPersonaController } from './tipos-persona.controller';
import { TiposPersona } from './entities/tipos-persona.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TiposPersona])],
  controllers: [TiposPersonaController],
  providers: [TiposPersonaService],
  
})
export class TiposPersonaModule {}