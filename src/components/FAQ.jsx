import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "配送はどのくらいかかりますか？",
    answer: "通常、ご注文から2〜3営業日以内に発送いたします。地域によって到着までの日数が異なりますが、概ね発送後1〜2日程度でお届けいたします。"
  },
  {
    question: "返品・交換は可能ですか？",
    answer: "商品に不備がある場合のみ、返品・交換を承ります。お届けから7日以内にカスタマーサポートまでご連絡ください。"
  },
  {
    question: "保存方法を教えてください。",
    answer: "高温多湿を避け、冷暗所で保存してください。開封後は密閉容器に入れて保存し、なるべく早めにお召し上がりください。"
  },
  {
    question: "定期購入はありますか？",
    answer: "はい、定期購入サービスをご用意しております。毎月10%OFFでお届けいたします。詳細は商品ページをご確認ください。"
  },
  {
    question: "コシヒカリの特徴は何ですか？",
    answer: "コシヒカリは、粘り気が強く、つやがあり、味が良いことが特徴です。また、炊いた時の香りも良く、冷めても美味しさが持続します。"
  },
  {
    question: "有機栽培のコシヒカリはありますか？",
    answer: "はい、一部の生産者が有機栽培のコシヒカリを提供しています。商品詳細ページでご確認いただけます。"
  },
  {
    question: "精米の種類は選べますか？",
    answer: "はい、玄米、5分づき、7分づき、白米からお選びいただけます。ご注文時にお好みの精米方法をお選びください。"
  },
  {
    question: "新米の時期はいつですか？",
    answer: "新潟県のコシヒカリの新米は、例年9月上旬から中旬に出荷が始まります。具体的な時期は天候により多少前後する場合があります。"
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">よくある質問</h2>
        <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;