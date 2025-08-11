import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { typeOrmConfig } from './database/typeorm.config';
## for module in modules
import { {{ module.className }} } from './{{ module.folderName }}/{{ module.fileName }}.module';
## endfor

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(typeOrmConfig),
## for module in modules
    {{ module.className }},
## endfor
  ],
})
export class AppModule {}