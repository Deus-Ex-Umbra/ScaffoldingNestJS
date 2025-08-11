import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PisoService } from './piso.service';
import { PisoController } from './piso.controller';
import { Piso } from './entities/piso.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Piso])],
  controllers: [PisoController],
  providers: [PisoService],
  
})
export class PisoModule {}