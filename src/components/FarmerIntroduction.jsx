import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const farmers = [
  {
    name: "佐藤 健太",
    description: "40年以上の稲作経験を持つベテラン農家。自然と共生する農法を実践。",
    image: "https://user0514.cdnw.net/shared/img/thumb/umedaLightroom_MG_4905_TP_V.jpg"
  },
  {
    name: "田中 美咲",
    description: "若手女性農家。最新技術と伝統的な手法を組み合わせた革新的な農業に取り組む。",
    image: "https://user0514.cdnw.net/shared/img/thumb/rinmonsan03152100_TP_V.jpg"
  },
  {
    name: "鈴木 一郎",
    description: "有機栽培にこだわり、安全で美味しいコシヒカリを生産する農家。",
    image: "https://user0514.cdnw.net/shared/img/thumb/shikun103128_TP_V.jpg"
  }
];

const FarmerIntroduction = () => {
  return (
    <section className="py-16 bg-snow-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-niigata-800">生産者紹介</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {farmers.map((farmer, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{farmer.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <img src={farmer.image} alt={farmer.name} className="w-full h-48 object-cover rounded-md mb-4" />
                <p>{farmer.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FarmerIntroduction;