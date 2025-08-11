import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TiposAmbientService } from './tipos-ambient.service';
import { TiposAmbientController } from './tipos-ambient.controller';
import { TiposAmbient } from './entities/tipos-ambient.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TiposAmbient])],
  controllers: [TiposAmbientController],
  providers: [TiposAmbientService],
  
})
export class TiposAmbientModule {}