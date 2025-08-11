import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CuentasCargosPosgradoService } from './cuentas-cargos-posgrado.service';
import { CuentasCargosPosgradoController } from './cuentas-cargos-posgrado.controller';
import { CuentasCargosPosgrado } from './entities/cuentas-cargos-posgrado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CuentasCargosPosgrado])],
  controllers: [CuentasCargosPosgradoController],
  providers: [CuentasCargosPosgradoService],
  
})
export class CuentasCargosPosgradoModule {}