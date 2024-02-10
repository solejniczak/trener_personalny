import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { checkoutOrder } from '@/lib/actions/order.actions';
import { Button } from '../ui/button';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function Checkout({ title, price, buttonText }) {
  console.log("AA", buttonText)

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }
    if (query.get('canceled')) {
      console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
    }
  }, []);

  const onCheckout = async () => {
    const order = {
      title: title,
      price: price,
    }

    await checkoutOrder(order);
  }

  return (
    <Button size="lg" className="button w-full md:w-fit bg-pink hover:bg-pink-700" onClick={onCheckout}>
      {buttonText}
    </Button>
  );
}
