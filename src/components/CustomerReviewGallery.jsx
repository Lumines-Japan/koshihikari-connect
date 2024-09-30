import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    name: "田中さん",
    content: "毎日の食事が楽しみになりました。本当に美味しいお米です！",
    image: "/customer-1.jpg"
  },
  {
    name: "佐藤さん",
    content: "家族全員が絶賛しています。これからもリピートします。",
    image: "/customer-2.jpg"
  },
  {
    name: "鈴木さん",
    content: "新潟のコシヒカリの中でも特に美味しいと感じました。大満足です。",
    image: "/customer-3.jpg"
  },
  {
    name: "高橋さん",
    content: "炊き上がりの香りが最高です。毎日の食卓が豊かになりました。",
    image: "/customer-4.jpg"
  }
];

const CustomerReviewGallery = () => {
  return (
    <section className="py-16 bg-snow-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-niigata-800">お客様の声</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="overflow-hidden">
              <img src={review.image} alt={`${review.name}様`} className="w-full h-48 object-cover" />
              <CardContent className="p-4">
                <p className="mb-2">{review.content}</p>
                <p className="text-right font-semibold">{review.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviewGallery;