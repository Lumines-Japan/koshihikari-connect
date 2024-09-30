import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-snow-50 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-3xl font-bold niigata-text-gradient">新潟コシヒカリ</Link>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-niigata-700">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute top-full left-0 w-full md:static md:w-auto bg-niigata-50 md:bg-transparent z-50`}>
            <ul className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 p-4 md:p-0 md:ml-auto text-sm">
              <li><Link to="/#product" className="block py-2 px-4 text-niigata-800 hover:bg-niigata-100 md:hover:bg-transparent md:hover:text-niigata-600 transition-colors">商品紹介</Link></li>
              <li><Link to="/#farmers" className="block py-2 px-4 text-niigata-800 hover:bg-niigata-100 md:hover:bg-transparent md:hover:text-niigata-600 transition-colors">生産者紹介</Link></li>
              <li><Link to="/#recipes" className="block py-2 px-4 text-niigata-800 hover:bg-niigata-100 md:hover:bg-transparent md:hover:text-niigata-600 transition-colors">レシピ</Link></li>
              <li><Link to="/#reviews" className="block py-2 px-4 text-niigata-800 hover:bg-niigata-100 md:hover:bg-transparent md:hover:text-niigata-600 transition-colors">お客様の声</Link></li>
              <li><Link to="/#faq" className="block py-2 px-4 text-niigata-800 hover:bg-niigata-100 md:hover:bg-transparent md:hover:text-niigata-600 transition-colors">FAQ</Link></li>
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