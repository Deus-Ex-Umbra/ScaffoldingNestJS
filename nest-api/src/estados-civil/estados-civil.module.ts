import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstadosCivilService } from './estados-civil.service';
import { EstadosCivilController } from './estados-civil.controller';
import { EstadosCivil } from './entities/estados-civil.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EstadosCivil])],
  controllers: [EstadosCivilController],
  providers: [EstadosCivilService],
  
})
export class EstadosCivilModule {}