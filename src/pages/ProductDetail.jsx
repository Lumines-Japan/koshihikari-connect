import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Layout from '../components/Layout';

const products = [
  {
    id: 1,
    name: "特選コシヒカリ 5kg",
    description: "新潟県産の最高級コシヒカリです。つやつやとした粒と甘みのある味わいが特徴です。",
    nutrition: "100gあたり: エネルギー 356kcal、たんぱく質 6.1g、脂質 0.9g、炭水化物 77.6g",
    cookingMethod: "1. 米を計量し、水で軽く洗います。\n2. 1.2倍の水を加え、30分浸水させます。\n3. 強火で炊き、沸騰したら弱火で15分炊きます。\n4. 15分蒸らして完成です。",
    image: "/koshihikari-5kg.jpg",
    price: 2500
  },
  {
    id: 2,
    name: "有機栽培コシヒカリ 2kg",
    description: "化学肥料を使用せず、自然の力で育てた有機栽培のコシヒカリです。",
    nutrition: "100gあたり: エネルギー 350kcal、たんぱく質 6.3g、脂質 0.8g、炭水化物 76.8g",
    cookingMethod: "通常のコシヒカリと同様に炊飯できます。より自然な味わいをお楽しみいただけます。",
    image: "/organic-koshihikari-2kg.jpg",
    price: 1800
  }
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">商品が見つかりません。</div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div>
            <p className="text-xl mb-4">{product.description}</p>
            <p className="font-bold text-2xl mb-4">価格: ¥{product.price.toLocaleString()}</p>
            <Button className="mb-4">カートに追加</Button>
            <h2 className="text-2xl font-semibold mb-2">栄養成分</h2>
            <p className="mb-4">{product.nutrition}</p>
            <h2 className="text-2xl font-semibold mb-2">調理方法</h2>
            <p className="whitespace-pre-line">{product.cookingMethod}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;