import React from 'react';
import { Button } from "@/components/ui/button";

const ProductIntro = () => {
  return (
    <section id="product" className="py-24 luxury-gradient">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 luxury-text-gradient">新潟県産コシヒカリ</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img src="/koshihikari.jpg" alt="新潟県産コシヒカリ" className="rounded-lg shadow-2xl mx-auto object-cover w-full h-auto" />
          </div>
          <div className="w-full md:w-1/2 md:pl-12">
            <h3 className="text-3xl font-semibold mb-6 luxury-text-gradient">最高品質のお米をあなたの食卓へ</h3>
            <p className="mb-6 text-luxury-700 leading-relaxed">新潟県の豊かな自然と匠の技が生み出す、極上のコシヒカリ。豊富な水源から育まれた、つやつやとした粒々、もちもちとした食感、そして香り高い味わいが特徴です。</p>
            <ul className="list-disc list-inside mb-8 text-luxury-700 space-y-2">
              <li>100%新潟県産</li>
              <li>減農薬栽培</li>
              <li>令和6年度新米</li>
              <li>豊富な水源で育った逸品</li>
              <li>精米したてをお届け</li>
            </ul>
            <Button className="w-full md:w-auto bg-luxury-800 hover:bg-luxury-900 text-white text-lg px-8 py-3">詳細を見る</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductIntro;