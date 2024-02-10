"use server"

import Stripe from 'stripe';

import { redirect } from 'next/navigation';

type OrderParams = {
    title: string
    price: string
}

export const checkoutOrder = async (order:OrderParams) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'pln',
            unit_amount: Number(order.price) * 100,
            product_data: {
              name: order.title
            }
          },
          quantity: 1
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/sukces`,
      cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/`,
    });

    redirect(session.url!)
  } catch (error) {
    throw error;
  }
}