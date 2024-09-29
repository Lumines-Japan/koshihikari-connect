import React from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">新潟コシヒカリ</div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#product" className="text-gray-600 hover:text-gray-800">商品紹介</a></li>
            <li><a href="#reviews" className="text-gray-600 hover:text-gray-800">お客様の声</a></li>
            <li><a href="#faq" className="text-gray-600 hover:text-gray-800">FAQ</a></li>
          </ul>
        </nav>
        <Button className="bg-green-500 hover:bg-green-600 text-white">今すぐ購入</Button>
      </div>
    </header>
  );
};

export default Header;