import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { AppConstants } from './shared/common';
import { Stripe } from 'stripe';

@Controller()
export class AppController {
  sk =
    'sk_test_51KCNhTLvkk9nJ8E0AJ4tEBRvXWzpXgKVNHBmfq9PkUICjJ69ItfTU089hHKuut85tM8MaXCrXFG975OWgxQzoNf600VRXYHZTq';
  config: Stripe.StripeConfig = { apiVersion: '2022-08-01' };

  stripe = new Stripe(this.sk, this.config);

  constructor() {}

  @Post()
  async createProduct() {
    const paymentIntent = await this.stripe.paymentIntents.create({
      amount: 1000,
      currency: 'usd',
      capture_method: 'manual',
      payment_method_types: ['card'],
    });

    console.log(paymentIntent);
    return { paymentIntent };
  }

  @Post('payment')
  async updatePayment(@Body() body) {
    const intent = await this.stripe.paymentIntents.update(
      body.paymentIntentId,
      {
        payment_method: body.paymentMethodId,
      },
    );

    return intent;
  }
}
