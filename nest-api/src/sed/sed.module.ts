import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SedService } from './sed.service';
import { SedController } from './sed.controller';
import { Sed } from './entities/sed.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sed])],
  controllers: [SedController],
  providers: [SedService],
  
})
export class SedModule {}