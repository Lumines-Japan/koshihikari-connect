import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  { id: 1, name: "田中さん", content: "毎日の食事が楽しみになりました。本当に美味しいお米です！" },
  { id: 2, name: "佐藤さん", content: "家族全員が絶賛しています。これからもリピートします。" },
  { id: 3, name: "鈴木さん", content: "新潟のコシヒカリの中でも特に美味しいと感じました。大満足です。" },
];

const CustomerReviews = () => {
  return (
    <section id="reviews" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">お客様の声</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <Card key={review.id}>
              <CardContent className="p-6">
                <p className="mb-4">{review.content}</p>
                <p className="text-right font-semibold">{review.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;