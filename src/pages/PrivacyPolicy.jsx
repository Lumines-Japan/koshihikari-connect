import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">プライバシーポリシー</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. 個人情報の収集・利用目的</h2>
        <p>当社は、以下の目的で個人情報を収集・利用いたします：</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>商品の発送</li>
          <li>お支払い手続き</li>
          <li>お問い合わせへの対応</li>
          <li>サービス改善のための分析</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. 個人情報の管理</h2>
        <p>当社は、お客様の個人情報を適切に管理し、不正アクセス、紛失、漏洩等の防止に努めます。</p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. 個人情報の第三者提供</h2>
        <p>当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供いたしません。</p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. 個人情報の開示・訂正・削除</h2>
        <p>お客様ご本人からの個人情報の開示、訂正、削除のご要望には、合理的な範囲で速やかに対応いたします。</p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Cookie（クッキー）の使用</h2>
        <p>当サイトでは、ユーザー体験の向上のためにCookieを使用しています。Cookieの使用を望まない場合は、ブラウザの設定で無効にすることができます。</p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. プライバシーポリシーの変更</h2>
        <p>当社は、必要に応じて本ポリシーを変更することがあります。変更後のプライバシーポリシーは、当サイトに掲載した時点から効力を生じるものとします。</p>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">7. お問い合わせ</h2>
        <p>本ポリシーに関するお問い合わせは、以下の連絡先までお願いいたします。</p>
        <p>株式会社スーラ</p>
        <p>メール: privacy@sula.co.jp</p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;