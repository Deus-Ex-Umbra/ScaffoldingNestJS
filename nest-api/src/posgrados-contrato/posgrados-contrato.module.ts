import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PosgradosContratoService } from './posgrados-contrato.service';
import { PosgradosContratoController } from './posgrados-contrato.controller';
import { PosgradosContrato } from './entities/posgrados-contrato.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PosgradosContrato])],
  controllers: [PosgradosContratoController],
  providers: [PosgradosContratoService],
  
})
export class PosgradosContratoModule {}