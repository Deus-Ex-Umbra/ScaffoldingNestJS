import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CuentasConceptoService } from './cuentas-concepto.service';
import { CuentasConceptoController } from './cuentas-concepto.controller';
import { CuentasConcepto } from './entities/cuentas-concepto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CuentasConcepto])],
  controllers: [CuentasConceptoController],
  providers: [CuentasConceptoService],
  
})
export class CuentasConceptoModule {}