import Stripe from 'stripe';

const stripe = new Stripe(import.meta.env.VITE_STRIPE_SECRET_KEY);

export const getProducts = async () => {
  const products = await stripe.products.list({
    expand: ['data.default_price'],
    active: true,
  });
  return products.data;
};