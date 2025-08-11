import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CuentasCargosPosgradosConceptoService } from './cuentas-cargos-posgrados-concepto.service';
import { CuentasCargosPosgradosConceptoController } from './cuentas-cargos-posgrados-concepto.controller';
import { CuentasCargosPosgradosConcepto } from './entities/cuentas-cargos-posgrados-concepto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CuentasCargosPosgradosConcepto])],
  controllers: [CuentasCargosPosgradosConceptoController],
  providers: [CuentasCargosPosgradosConceptoService],
  
})
export class CuentasCargosPosgradosConceptoModule {}