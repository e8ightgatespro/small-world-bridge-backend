import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BridgeModule } from './Controller/bridge.module';

@Module({
  imports: [BridgeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
