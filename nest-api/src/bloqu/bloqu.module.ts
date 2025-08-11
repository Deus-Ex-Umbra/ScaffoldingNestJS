import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BloquService } from './bloqu.service';
import { BloquController } from './bloqu.controller';
import { Bloqu } from './entities/bloqu.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bloqu])],
  controllers: [BloquController],
  providers: [BloquService],
  
})
export class BloquModule {}