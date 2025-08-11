import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PosgradoClasesVideoService } from './posgrado-clases-video.service';
import { PosgradoClasesVideoController } from './posgrado-clases-video.controller';
import { PosgradoClasesVideo } from './entities/posgrado-clases-video.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PosgradoClasesVideo])],
  controllers: [PosgradoClasesVideoController],
  providers: [PosgradoClasesVideoService],
  
})
export class PosgradoClasesVideoModule {}