import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PosgradosTransaccionService } from './posgrados-transaccion.service';
import { PosgradosTransaccionController } from './posgrados-transaccion.controller';
import { PosgradosTransaccion } from './entities/posgrados-transaccion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PosgradosTransaccion])],
  controllers: [PosgradosTransaccionController],
  providers: [PosgradosTransaccionService],
  
})
export class PosgradosTransaccionModule {}