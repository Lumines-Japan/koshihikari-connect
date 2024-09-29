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