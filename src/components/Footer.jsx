import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-niigata-800 text-snow-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-rice-300">お問い合わせ</h3>
            <form>
              <Input type="email" placeholder="メールアドレス" className="mb-4 bg-niigata-700 border-niigata-600 text-snow-50 placeholder-snow-300" />
              <textarea
                className="w-full p-3 mb-4 rounded bg-niigata-700 border-niigata-600 text-snow-50 placeholder-snow-300"
                rows="3"
                placeholder="お問い合わせ内容"
              ></textarea>
              <Button type="submit" className="w-full bg-rice-500 text-niigata-900 hover:bg-rice-700">送信</Button>
            </form>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-rice-300">会社情報</h3>
            <p className="mb-2">新潟コシヒカリ株式会社</p>
            <p className="mb-2">〒950-0000 新潟県新潟市中央区○○町1-1-1</p>
            <p className="mb-2">TEL: 025-XXX-XXXX</p>
            <p>営業時間: 平日 9:00〜17:00</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-rice-300">SNS</h3>
            <div className="flex space-x-6">
              <a href="#" className="text-snow-50 hover:text-rice-300 transition-colors"><Twitter size={28} /></a>
              <a href="#" className="text-snow-50 hover:text-rice-300 transition-colors"><Facebook size={28} /></a>
              <a href="#" className="text-snow-50 hover:text-rice-300 transition-colors"><Instagram size={28} /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center text-snow-300">
          <p>&copy; 2024 新潟コシヒカリ株式会社 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;