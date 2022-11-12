import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ZapatillasController } from './zapatillas/zapatillas.controller';
import { ZapatillasService } from './zapatillas/zapatillas.service';

@Module({
  imports: [],
  controllers: [AppController, ZapatillasController],
  providers: [AppService, ZapatillasService],
})
export class AppModule {}
