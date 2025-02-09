import { Injectable } from '@nestjs/common';
import { EventBus } from '@nestjs/cqrs';
import { randomUUID } from 'crypto';
import { OrderCreated } from './order-created.event';

@Injectable()
export class AppService {
  constructor(private readonly eventBus: EventBus) {}

  async createOrder() {
    this.eventBus.publish(new OrderCreated(randomUUID()));
  }
}
