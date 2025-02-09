import { EventsHandler } from '@nestjs/cqrs';
import { OrderCreated } from './order-created.event';

@EventsHandler(OrderCreated)
export class OrderCreatedEventHandler {
  handle(event: OrderCreated) {
    console.log('Order created', event);
  }
}
