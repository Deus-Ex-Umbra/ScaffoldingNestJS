import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmisionCedulaService } from './emision-cedula.service';
import { EmisionCedulaController } from './emision-cedula.controller';
import { EmisionCedula } from './entities/emision-cedula.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EmisionCedula])],
  controllers: [EmisionCedulaController],
  providers: [EmisionCedulaService],
  
})
export class EmisionCedulaModule {}