import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage: 'url("/rice-field.jpg")'}}>
      <div className="absolute inset-0 bg-niigata-900 bg-opacity-50"></div>
      <div className="relative z-10 text-center text-snow-50">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">極上の新潟コシヒカリ</h1>
        <p className="text-xl md:text-2xl mb-8">自然の恵みと匠の技が生み出す、至高の一粒</p>
        <Button className="bg-rice-500 hover:bg-rice-700 text-niigata-900 text-lg px-8 py-3">今すぐ購入</Button>
      </div>
    </section>
  );
};

export default Hero;