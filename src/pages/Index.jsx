import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductIntro from "../components/ProductIntro";
import CustomerReviews from "../components/CustomerReviews";
import SpecialOffer from "../components/SpecialOffer";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import RecipeSection from "../components/RecipeSection";
import FarmerIntroduction from "../components/FarmerIntroduction";
import SocialFeed from "../components/SocialFeed";
import BlogSection from "../components/BlogSection";
import CustomerReviewGallery from "../components/CustomerReviewGallery";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import OrderForm from "../components/OrderForm";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="pt-16">
        <Hero />
        <section id="product">
          <ProductIntro />
        </section>
        <section className="py-16 bg-snow-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-niigata-800">
              商品詳細・ご注文
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <Link to="/product/1">
                  <Button className="w-full">特選コシヒカリ 5kg</Button>
                </Link>
                <Link to="/product/2">
                  <Button className="w-full">有機栽培コシヒカリ 2kg</Button>
                </Link>
              </div>
              <div className="bg-snow-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-niigata-800">ご注文フォーム</h3>
                <OrderForm />
              </div>
            </div>
          </div>
        </section>
        <BlogSection />
        <section id="recipes">
          <RecipeSection />
        </section>
        <section id="farmers">
          <FarmerIntroduction />
        </section>
        <section id="reviews">
          <CustomerReviewGallery />
        </section>
        <SpecialOffer />
        <section id="faq">
          <FAQ />
        </section>
        <SocialFeed />
      </main>
      <Footer />
    </div>
  );
};

export default Index;