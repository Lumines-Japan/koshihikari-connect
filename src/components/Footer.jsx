import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">お問い合わせ</h3>
            <form>
              <Input type="email" placeholder="メールアドレス" className="mb-2" />
              <textarea
                className="w-full p-2 mb-2 rounded"
                rows="3"
                placeholder="お問い合わせ内容"
              ></textarea>
              <Button type="submit" className="w-full">送信</Button>
            </form>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">会社情報</h3>
            <p>新潟コシヒカリ株式会社</p>
            <p>〒950-0000 新潟県新潟市中央区○○町1-1-1</p>
            <p>TEL: 025-XXX-XXXX</p>
            <p>営業時間: 平日 9:00〜17:00</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">SNS</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300"><Twitter size={24} /></a>
              <a href="#" className="hover:text-gray-300"><Facebook size={24} /></a>
              <a href="#" className="hover:text-gray-300"><Instagram size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 新潟コシヒカリ株式会社 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;