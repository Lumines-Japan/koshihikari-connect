import React from 'react';
import Layout from '../components/Layout';

const PrivacyPolicy = () => {
  const policies = [
    {
      title: "1. 個人情報の収集・利用目的",
      content: "当社は、以下の目的で個人情報を収集・利用いたします：\n・商品の発送\n・お支払い手続き\n・お問い合わせへの対応\n・サービス改善のための分析"
    },
    {
      title: "2. 個人情報の管理",
      content: "当社は、お客様の個人情報を適切に管理し、不正アクセス、紛失、漏洩等の防止に努めます。"
    },
    {
      title: "3. 個人情報の第三者提供",
      content: "当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供いたしません。"
    },
    {
      title: "4. 個人情報の開示・訂正・削除",
      content: "お客様ご本人からの個人情報の開示、訂正、削除のご要望には、合理的な範囲で速やかに対応いたします。"
    },
    {
      title: "5. Cookie（クッキー）の使用",
      content: "当サイトでは、ユーザー体験の向上のためにCookieを使用しています。Cookieの使用を望まない場合は、ブラウザの設定で無効にすることができます。"
    },
    {
      title: "6. プライバシーポリシーの変更",
      content: "当社は、必要に応じて本ポリシーを変更することがあります。変更後のプライバシーポリシーは、当サイトに掲載した時点から効力を生じるものとします。"
    },
    {
      title: "7. お問い合わせ",
      content: "本ポリシーに関するお問い合わせは、以下の連絡先までお願いいたします。\n\n株式会社スーラ\nメール: privacy@sula.co.jp"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-niigata-800">プライバシーポリシー</h1>
        
        {policies.map((policy, index) => (
          <section key={index} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-niigata-700">{policy.title}</h2>
            <p className="text-niigata-600 whitespace-pre-line">{policy.content}</p>
          </section>
        ))}
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;