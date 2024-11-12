import Stripe from 'stripe';

const dummyProducts = [
  {
    id: 'dummy-1',
    name: '新潟県産コシヒカリ 5kg',
    description: '新潟県産の最高級コシヒカリです。',
    images: ['/placeholder.svg'],
    default_price: {
      id: 'price_dummy1',
      unit_amount: 2500,
    },
  },
  {
    id: 'dummy-2',
    name: '新潟県産コシヒカリ 10kg',
    description: '新潟県産の最高級コシヒカリです。',
    images: ['/placeholder.svg'],
    default_price: {
      id: 'price_dummy2',
      unit_amount: 4800,
    },
  },
];

let stripe = null;
if (import.meta.env.VITE_STRIPE_SECRET_KEY) {
  stripe = new Stripe(import.meta.env.VITE_STRIPE_SECRET_KEY);
}

export const getProducts = async () => {
  if (!stripe) {
    console.warn('Stripe Secret Key is not set. Using dummy data.');
    return dummyProducts;
  }

  try {
    const products = await stripe.products.list({
      expand: ['data.default_price'],
      active: true,
    });
    return products.data;
  } catch (error) {
    console.error('Failed to fetch products from Stripe:', error);
    return dummyProducts;
  }
};