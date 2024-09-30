import React from 'react';
import { Button } from "@/components/ui/button";
import { Twitter, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-snow-50 text-niigata-900 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-niigata-700">会社情報</h3>
            <p className="mb-2 font-medium">株式会社スーラ</p>
            <p className="mb-2">〒959-1264 新潟県燕市八王寺656−2 新潟営業所</p>
            <p className="mb-2">TEL: 0256-46-8493</p>
            <p>営業時間: 平日 9:00〜17:00</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-niigata-700">SNS</h3>
            <div className="flex space-x-6">
              <a href="#" className="text-niigata-600 hover:text-niigata-800 transition-colors"><Twitter size={28} /></a>
              <a href="#" className="text-niigata-600 hover:text-niigata-800 transition-colors"><Facebook size={28} /></a>
              <a href="#" className="text-niigata-600 hover:text-niigata-800 transition-colors"><Instagram size={28} /></a>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-niigata-700">お問い合わせ</h3>
            <div className="flex justify-center space-x-4 mb-6">
              <Link to="/shipping-and-returns" className="text-niigata-600 hover:text-niigata-800 transition-colors">配送・返品</Link>
              <Link to="/legal-information" className="text-niigata-600 hover:text-niigata-800 transition-colors">特定商取引法</Link>
              <Link to="/privacy-policy" className="text-niigata-600 hover:text-niigata-800 transition-colors">プライバシーポリシー</Link>
            </div>
            <Link to="/contact">
              <Button className="w-full bg-niigata-600 text-snow-50 hover:bg-niigata-700">
                お問い合わせはこちら
              </Button>
            </Link>
          </div>
        </div>
        <div className="mt-12 text-center text-niigata-600">
          <p className="font-medium">&copy; 2024 Sula Co., Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;