import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AmbientService } from './ambient.service';
import { AmbientController } from './ambient.controller';
import { Ambient } from './entities/ambient.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ambient])],
  controllers: [AmbientController],
  providers: [AmbientService],
  
})
export class AmbientModule {}