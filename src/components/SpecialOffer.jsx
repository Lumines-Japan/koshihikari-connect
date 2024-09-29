import React from 'react';
import { Button } from "@/components/ui/button";

const SpecialOffer = () => {
  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">期間限定特別オファー</h2>
        <p className="text-xl mb-6">今なら初回購入の方に限り、10%OFFクーポンをプレゼント！</p>
        <Button className="bg-red-500 hover:bg-red-600 text-white text-lg px-8 py-3">
          クーポンを取得する
        </Button>
        <p className="mt-4 text-sm text-gray-600">※ クーポンの有効期限は取得から2週間です。</p>
      </div>
    </section>
  );
};

export default SpecialOffer;