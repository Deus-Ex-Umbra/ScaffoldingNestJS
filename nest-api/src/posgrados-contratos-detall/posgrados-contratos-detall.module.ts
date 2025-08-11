import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PosgradosContratosDetallService } from './posgrados-contratos-detall.service';
import { PosgradosContratosDetallController } from './posgrados-contratos-detall.controller';
import { PosgradosContratosDetall } from './entities/posgrados-contratos-detall.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PosgradosContratosDetall])],
  controllers: [PosgradosContratosDetallController],
  providers: [PosgradosContratosDetallService],
  
})
export class PosgradosContratosDetallModule {}