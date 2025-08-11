import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PosgradosTransaccionesDetallService } from './posgrados-transacciones-detall.service';
import { PosgradosTransaccionesDetallController } from './posgrados-transacciones-detall.controller';
import { PosgradosTransaccionesDetall } from './entities/posgrados-transacciones-detall.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PosgradosTransaccionesDetall])],
  controllers: [PosgradosTransaccionesDetallController],
  providers: [PosgradosTransaccionesDetallService],
  
})
export class PosgradosTransaccionesDetallModule {}