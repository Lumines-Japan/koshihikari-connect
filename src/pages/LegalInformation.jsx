import React from "react";
import Layout from "../components/Layout";

const LegalInformation = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-niigata-800">
          特定商取引法に基づく表記
        </h1>

        {[
          { title: "販売業者", content: "株式会社スーラ" },
          { title: "運営責任者", content: "長谷川 莉加" },
          {
            title: "所在地",
            content: "〒101-0023\n東京都千代田区神田松下町48 ism神田5F",
          },
          {
            title: "連絡先",
            content: "TEL: 0256-46-8493\nメール: info@sula.co.jp",
          },
          {
            title: "商品代金以外の必要料金",
            content: "送料: 全国一律500円（5,000円以上のご購入で送料無料）",
          },
          { title: "引渡し時期", content: "ご注文から1〜3営業日以内に発送" },
          {
            title: "お支払方法",
            content: "クレジットカード、銀行振込",
          },
          {
            title: "返品・交換について",
            content:
              "商品到着後未開封7日以内に限り、返品・交換を承ります。詳細は返品ポリシーをご確認ください。",
          },
        ].map((item, index) => (
          <section
            key={index}
            className="mb-8 bg-snow-50 p-6 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-4 text-niigata-700">
              {item.title}
            </h2>
            <p className="text-niigata-600 whitespace-pre-line">
              {item.content}
            </p>
          </section>
        ))}
      </div>
    </Layout>
  );
};

export default LegalInformation;
