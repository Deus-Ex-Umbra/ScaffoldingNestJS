import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonasAdministrativoService } from './personas-administrativo.service';
import { PersonasAdministrativoController } from './personas-administrativo.controller';
import { PersonasAdministrativo } from './entities/personas-administrativo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PersonasAdministrativo])],
  controllers: [PersonasAdministrativoController],
  providers: [PersonasAdministrativoService],
  
})
export class PersonasAdministrativoModule {}