import React from 'react';
import { Button } from "@/components/ui/button";

const ProductIntro = () => {
  return (
    <section id="product" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">新潟県産コシヒカリ</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="/placeholder.svg" alt="新潟県産コシヒカリ" className="rounded-lg shadow-md mx-auto object-cover" />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h3 className="text-2xl font-semibold mb-4">最高品質のお米をあなたの食卓へ</h3>
            <p className="mb-4">新潟県の豊かな自然と匠の技が生み出す、極上のコシヒカリ。つやつやとした粒々、もちもちとした食感、そして香り高い味わいが特徴です。</p>
            <ul className="list-disc list-inside mb-6">
              <li>100%新潟県産</li>
              <li>減農薬栽培</li>
              <li>令和5年度新米</li>
              <li>精米したてをお届け</li>
            </ul>
            <Button className="bg-green-500 hover:bg-green-600 text-white">詳細を見る</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductIntro;