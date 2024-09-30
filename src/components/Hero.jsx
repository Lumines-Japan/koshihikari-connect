import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative pt-[4.5rem] h-[calc(100vh-96px)] flex items-center justify-center bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1601598851547-4302969d0614?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'}}>
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