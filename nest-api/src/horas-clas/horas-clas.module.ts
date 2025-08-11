import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HorasClasService } from './horas-clas.service';
import { HorasClasController } from './horas-clas.controller';
import { HorasClas } from './entities/horas-clas.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HorasClas])],
  controllers: [HorasClasController],
  providers: [HorasClasService],
  
})
export class HorasClasModule {}