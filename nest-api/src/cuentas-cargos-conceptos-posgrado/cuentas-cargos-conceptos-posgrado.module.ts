import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CuentasCargosConceptosPosgradoService } from './cuentas-cargos-conceptos-posgrado.service';
import { CuentasCargosConceptosPosgradoController } from './cuentas-cargos-conceptos-posgrado.controller';
import { CuentasCargosConceptosPosgrado } from './entities/cuentas-cargos-conceptos-posgrado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CuentasCargosConceptosPosgrado])],
  controllers: [CuentasCargosConceptosPosgradoController],
  providers: [CuentasCargosConceptosPosgradoService],
  
})
export class CuentasCargosConceptosPosgradoModule {}