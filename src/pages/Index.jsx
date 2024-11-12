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
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-niigata-800">
              商品詳細
            </h2>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/product/dummy-1">
                <Button className="w-full sm:w-auto">特選コシヒカリ 5kg ¥4,000</Button>
              </Link>
              <Link to="/product/dummy-2">
                <Button className="w-full sm:w-auto">
                  特選コシヒカリ 10kg ¥7,800
                </Button>
              </Link>
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