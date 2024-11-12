import Stripe from 'stripe';

if (!import.meta.env.VITE_STRIPE_SECRET_KEY) {
  throw new Error('Stripe Secret Key is not set. Please set VITE_STRIPE_SECRET_KEY in your environment variables.');
}

const stripe = new Stripe(import.meta.env.VITE_STRIPE_SECRET_KEY);

export const getProducts = async () => {
  const products = await stripe.products.list({
    expand: ['data.default_price'],
    active: true,
  });
  return products.data;
};