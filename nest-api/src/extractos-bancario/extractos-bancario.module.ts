import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExtractosBancarioService } from './extractos-bancario.service';
import { ExtractosBancarioController } from './extractos-bancario.controller';
import { ExtractosBancario } from './entities/extractos-bancario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ExtractosBancario])],
  controllers: [ExtractosBancarioController],
  providers: [ExtractosBancarioService],
  
})
export class ExtractosBancarioModule {}