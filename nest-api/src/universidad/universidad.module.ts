import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UniversidadService } from './universidad.service';
import { UniversidadController } from './universidad.controller';
import { Universidad } from './entities/universidad.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Universidad])],
  controllers: [UniversidadController],
  providers: [UniversidadService],
  
})
export class UniversidadModule {}