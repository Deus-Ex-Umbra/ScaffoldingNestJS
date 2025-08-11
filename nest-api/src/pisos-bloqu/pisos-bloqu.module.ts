import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PisosBloquService } from './pisos-bloqu.service';
import { PisosBloquController } from './pisos-bloqu.controller';
import { PisosBloqu } from './entities/pisos-bloqu.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PisosBloqu])],
  controllers: [PisosBloquController],
  providers: [PisosBloquService],
  
})
export class PisosBloquModule {}