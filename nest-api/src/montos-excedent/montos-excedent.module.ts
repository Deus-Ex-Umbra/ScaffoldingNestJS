import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MontosExcedentService } from './montos-excedent.service';
import { MontosExcedentController } from './montos-excedent.controller';
import { MontosExcedent } from './entities/montos-excedent.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MontosExcedent])],
  controllers: [MontosExcedentController],
  providers: [MontosExcedentService],
  
})
export class MontosExcedentModule {}