import React from 'react';

const LegalInformation = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">特定商取引法に基づく表記</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">販売業者</h2>
        <p>株式会社スーラ</p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">運営責任者</h2>
        <p>山田 太郎</p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">所在地</h2>
        <p>〒959-1264 新潟県燕市八王寺656−2 新潟営業所</p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">連絡先</h2>
        <p>TEL: 0256-46-8493</p>
        <p>メール: info@sula.co.jp</p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">商品代金以外の必要料金</h2>
        <p>送料: 全国一律500円（5,000円以上のご購入で送料無料）</p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">引渡し時期</h2>
        <p>ご注文から1〜3営業日以内に発送</p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">お支払方法</h2>
        <p>クレジットカード、銀行振込、コンビニ決済</p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">返品・交換について</h2>
        <p>商品到着後7日以内に限り、返品・交換を承ります。詳細は返品ポリシーをご確認ください。</p>
      </section>
    </div>
  );
};

export default LegalInformation;