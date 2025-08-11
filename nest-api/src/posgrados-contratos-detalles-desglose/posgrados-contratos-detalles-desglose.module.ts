import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PosgradosContratosDetallesDesgloseService } from './posgrados-contratos-detalles-desglose.service';
import { PosgradosContratosDetallesDesgloseController } from './posgrados-contratos-detalles-desglose.controller';
import { PosgradosContratosDetallesDesglose } from './entities/posgrados-contratos-detalles-desglose.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PosgradosContratosDetallesDesglose])],
  controllers: [PosgradosContratosDetallesDesgloseController],
  providers: [PosgradosContratosDetallesDesgloseService],
  
})
export class PosgradosContratosDetallesDesgloseModule {}