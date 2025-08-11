import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GruposSanguineoService } from './grupos-sanguineo.service';
import { GruposSanguineoController } from './grupos-sanguineo.controller';
import { GruposSanguineo } from './entities/grupos-sanguineo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GruposSanguineo])],
  controllers: [GruposSanguineoController],
  providers: [GruposSanguineoService],
  
})
export class GruposSanguineoModule {}