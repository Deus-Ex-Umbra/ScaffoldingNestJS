import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PosgradosTransaccionesDetallesDesgloseService } from './posgrados-transacciones-detalles-desglose.service';
import { PosgradosTransaccionesDetallesDesgloseController } from './posgrados-transacciones-detalles-desglose.controller';
import { PosgradosTransaccionesDetallesDesglose } from './entities/posgrados-transacciones-detalles-desglose.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PosgradosTransaccionesDetallesDesglose])],
  controllers: [PosgradosTransaccionesDetallesDesgloseController],
  providers: [PosgradosTransaccionesDetallesDesgloseService],
  
})
export class PosgradosTransaccionesDetallesDesgloseModule {}