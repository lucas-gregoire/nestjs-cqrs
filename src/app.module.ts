import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { AppService } from './app.service';
import { OrderCreatedEventHandler } from './order-created.event-handler';

@Module({
  imports: [CqrsModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, OrderCreatedEventHandler],
})
export class AppModule {}
