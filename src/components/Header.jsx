import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-snow-50 shadow-md">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="text-3xl font-bold niigata-text-gradient">新潟コシヒカリ</div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-niigata-700">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
            <ul className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 mt-4 md:mt-0">
              <li><a href="#product" className="text-niigata-700 hover:text-niigata-900 transition-colors">商品紹介</a></li>
              <li><a href="#reviews" className="text-niigata-700 hover:text-niigata-900 transition-colors">お客様の声</a></li>
              <li><a href="#faq" className="text-niigata-700 hover:text-niigata-900 transition-colors">FAQ</a></li>
            </ul>
          </nav>
          <Button className="hidden md:block bg-rice-500 hover:bg-rice-700 text-niigata-900">今すぐ購入</Button>
        </div>
        {isMenuOpen && (
          <Button className="w-full mt-4 bg-rice-500 hover:bg-rice-700 text-niigata-900 md:hidden">今すぐ購入</Button>
        )}
      </div>
    </header>
  );
};

export default Header;