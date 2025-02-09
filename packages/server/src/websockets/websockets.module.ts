import { AccountsModule } from '../api/accounts/accounts.module';
import { CustomersModule } from '..//api/customers/customers.module';
import { EventsModule } from '../api/events/events.module';
import { forwardRef, Module } from '@nestjs/common';
import { WebsocketGateway } from './websocket.gateway';
import {
  Customer,
  CustomerSchema,
} from '@/api/customers/schemas/customer.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { WebhooksModule } from '@/api/webhooks/webhooks.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Customer.name, schema: CustomerSchema },
    ]),
    forwardRef(() => AccountsModule),
    forwardRef(() => CustomersModule),
    forwardRef(() => EventsModule),
    forwardRef(() => WebhooksModule),
  ],
  providers: [WebsocketGateway],
  exports: [WebsocketGateway],
})
export class WebsocketsModule {}
