import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonasRolService } from './personas-rol.service';
import { PersonasRolController } from './personas-rol.controller';
import { PersonasRol } from './entities/personas-rol.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PersonasRol])],
  controllers: [PersonasRolController],
  providers: [PersonasRolService],
  
})
export class PersonasRolModule {}