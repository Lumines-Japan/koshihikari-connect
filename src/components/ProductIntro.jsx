import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProductIntro = () => {
  return (
    <section id="product" className="py-24 bg-snow-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-niigata-800">新潟県産コシヒカリの特徴</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-snow-50 p-6 rounded-lg shadow-lg">
            <img src="https://user0514.cdnw.net/shared/img/thumb/umedaLightroom_MG_4905_TP_V.jpg" alt="粒選別" className="w-full h-48 object-cover rounded-t-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-2 text-niigata-700">厳選された粒</h3>
            <p className="text-niigata-600">一粒一粒丁寧に選別し、最高品質の米だけをお届けします。</p>
          </div>
          <div className="bg-snow-50 p-6 rounded-lg shadow-lg">
            <img src="https://www.photo-ac.com/main/detail/23849826" alt="自然環境" className="w-full h-48 object-cover rounded-t-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-2 text-niigata-700">豊かな自然環境</h3>
            <p className="text-niigata-600">新潟の肥沃な大地と清らかな水で育った逸品です。</p>
          </div>
          <div className="bg-snow-50 p-6 rounded-lg shadow-lg">
            <img src="https://user0514.cdnw.net/shared/img/thumb/kamameshiPAR50519_TP_V.jpg" alt="炊き上がり" className="w-full h-48 object-cover rounded-t-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-2 text-niigata-700">極上の食感</h3>
            <p className="text-niigata-600">もちもちとした食感と香り高い味わいをお楽しみいただけます。</p>
          </div>
        </div>
        <div className="text-center mt-12">
          <Link to="/products">
            <Button className="bg-niigata-600 hover:bg-niigata-700 text-snow-50 text-lg px-8 py-3">商品詳細を見る</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductIntro;