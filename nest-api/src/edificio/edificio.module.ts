import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EdificioService } from './edificio.service';
import { EdificioController } from './edificio.controller';
import { Edificio } from './entities/edificio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Edificio])],
  controllers: [EdificioController],
  providers: [EdificioService],
  
})
export class EdificioModule {}