import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-luxury-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">お問い合わせ</h3>
            <form>
              <Input type="email" placeholder="メールアドレス" className="mb-4 bg-luxury-800 border-luxury-700" />
              <textarea
                className="w-full p-3 mb-4 rounded bg-luxury-800 border-luxury-700"
                rows="3"
                placeholder="お問い合わせ内容"
              ></textarea>
              <Button type="submit" className="w-full bg-white text-luxury-900 hover:bg-luxury-100">送信</Button>
            </form>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6">会社情報</h3>
            <p className="mb-2">新潟コシヒカリ株式会社</p>
            <p className="mb-2">〒950-0000 新潟県新潟市中央区○○町1-1-1</p>
            <p className="mb-2">TEL: 025-XXX-XXXX</p>
            <p>営業時間: 平日 9:00〜17:00</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6">SNS</h3>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-luxury-300 transition-colors"><Twitter size={28} /></a>
              <a href="#" className="hover:text-luxury-300 transition-colors"><Facebook size={28} /></a>
              <a href="#" className="hover:text-luxury-300 transition-colors"><Instagram size={28} /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center text-luxury-400">
          <p>&copy; 2024 新潟コシヒカリ株式会社 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;