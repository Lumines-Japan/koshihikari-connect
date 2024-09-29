import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductIntro from '../components/ProductIntro';
import CustomerReviews from '../components/CustomerReviews';
import SpecialOffer from '../components/SpecialOffer';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <ProductIntro />
        <CustomerReviews />
        <SpecialOffer />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;