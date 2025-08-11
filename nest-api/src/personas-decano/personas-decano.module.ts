import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonasDecanoService } from './personas-decano.service';
import { PersonasDecanoController } from './personas-decano.controller';
import { PersonasDecano } from './entities/personas-decano.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PersonasDecano])],
  controllers: [PersonasDecanoController],
  providers: [PersonasDecanoService],
  
})
export class PersonasDecanoModule {}