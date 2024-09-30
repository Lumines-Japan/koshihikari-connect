import React from 'react';

const ShippingAndReturns = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">配送・返品ポリシー</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">配送について</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>ご注文確認後、1-3営業日以内に発送いたします。</li>
          <li>配送料は全国一律500円です。5,000円以上のご購入で送料無料となります。</li>
          <li>配送は佐川急便または日本郵便でお届けします。</li>
          <li>沖縄県および離島への配送は追加料金がかかる場合があります。</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">返品・交換について</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>商品到着後7日以内にご連絡いただいた場合に限り、返品・交換を承ります。</li>
          <li>返品・交換の送料はお客様負担となります。</li>
          <li>以下の場合は返品・交換をお受けできません：
            <ul className="list-circle pl-6 mt-2 space-y-1">
              <li>開封済みの商品</li>
              <li>お客様のご都合による返品（イメージと違う、注文間違いなど）</li>
              <li>到着から8日以上経過した商品</li>
            </ul>
          </li>
        </ul>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">保証について</h2>
        <p>商品に不備があった場合は、到着後30日以内にご連絡ください。代替品の発送または返金で対応いたします。</p>
      </section>
    </div>
  );
};

export default ShippingAndReturns;