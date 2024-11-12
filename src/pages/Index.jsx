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
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-niigata-800">
              商品詳細
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-full h-[400px] relative">
                  <img
                    src="/rice-product-1.jpg"
                    alt="特選コシヒカリ 5kg"
                    className="w-full h-full object-contain rounded-lg shadow-lg"
                  />
                </div>
                <div className="flex space-x-2">
                  <img
                    src="/rice-detail-1.jpg"
                    alt="商品詳細1"
                    className="w-24 h-24 object-cover rounded-md cursor-pointer hover:opacity-75 transition-opacity"
                  />
                  <img
                    src="/rice-detail-2.jpg"
                    alt="商品詳細2"
                    className="w-24 h-24 object-cover rounded-md cursor-pointer hover:opacity-75 transition-opacity"
                  />
                  <img
                    src="/rice-detail-3.jpg"
                    alt="商品詳細3"
                    className="w-24 h-24 object-cover rounded-md cursor-pointer hover:opacity-75 transition-opacity"
                  />
                </div>
                <Link to="/product/dummy-1">
                  <Button className="w-full sm:w-auto">特選コシヒカリ 5kg ¥4,000</Button>
                </Link>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="w-full h-[400px] relative">
                  <img
                    src="/rice-product-2.jpg"
                    alt="特選コシヒカリ 10kg"
                    className="w-full h-full object-contain rounded-lg shadow-lg"
                  />
                </div>
                <div className="flex space-x-2">
                  <img
                    src="/rice-detail-4.jpg"
                    alt="商品詳細4"
                    className="w-24 h-24 object-cover rounded-md cursor-pointer hover:opacity-75 transition-opacity"
                  />
                  <img
                    src="/rice-detail-5.jpg"
                    alt="商品詳細5"
                    className="w-24 h-24 object-cover rounded-md cursor-pointer hover:opacity-75 transition-opacity"
                  />
                  <img
                    src="/rice-detail-6.jpg"
                    alt="商品詳細6"
                    className="w-24 h-24 object-cover rounded-md cursor-pointer hover:opacity-75 transition-opacity"
                  />
                </div>
                <Link to="/product/dummy-2">
                  <Button className="w-full sm:w-auto">特選コシヒカリ 10kg ¥7,800</Button>
                </Link>
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