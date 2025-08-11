import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonasDocentService } from './personas-docent.service';
import { PersonasDocentController } from './personas-docent.controller';
import { PersonasDocent } from './entities/personas-docent.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PersonasDocent])],
  controllers: [PersonasDocentController],
  providers: [PersonasDocentService],
  
})
export class PersonasDocentModule {}