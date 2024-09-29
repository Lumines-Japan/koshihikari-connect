import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">新潟コシヒカリ</div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600">
              <Menu size={24} />
            </button>
          </div>
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
            <ul className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 mt-4 md:mt-0">
              <li><a href="#product" className="text-gray-600 hover:text-gray-800">商品紹介</a></li>
              <li><a href="#reviews" className="text-gray-600 hover:text-gray-800">お客様の声</a></li>
              <li><a href="#faq" className="text-gray-600 hover:text-gray-800">FAQ</a></li>
            </ul>
          </nav>
          <Button className="hidden md:block bg-green-500 hover:bg-green-600 text-white">今すぐ購入</Button>
        </div>
        {isMenuOpen && (
          <Button className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white md:hidden">今すぐ購入</Button>
        )}
      </div>
    </header>
  );
};

export default Header;