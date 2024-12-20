import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = element.offsetTop - 80;
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-snow-50 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold niigata-text-gradient">
            新潟保内米 長谷川農園
          </Link>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-niigata-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <nav
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:block absolute top-full left-0 w-full md:static md:w-auto bg-snow-50 md:bg-transparent z-50`}
          >
            <ul className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 p-4 md:p-0">
              <li>
                <a
                  href="#product"
                  onClick={(e) => handleNavClick(e, "product")}
                  className="block py-2 px-4 text-niigata-800 hover:bg-niigata-100 md:hover:bg-transparent md:hover:text-niigata-600 transition-colors"
                >
                  商品紹介
                </a>
              </li>
              <li>
                <a
                  href="#farmers"
                  onClick={(e) => handleNavClick(e, "farmers")}
                  className="block py-2 px-4 text-niigata-800 hover:bg-niigata-100 md:hover:bg-transparent md:hover:text-niigata-600 transition-colors"
                >
                  生産者紹介
                </a>
              </li>
              <li>
                <a
                  href="#recipes"
                  onClick={(e) => handleNavClick(e, "recipes")}
                  className="block py-2 px-4 text-niigata-800 hover:bg-niigata-100 md:hover:bg-transparent md:hover:text-niigata-600 transition-colors"
                >
                  レシピ
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  onClick={(e) => handleNavClick(e, "reviews")}
                  className="block py-2 px-4 text-niigata-800 hover:bg-niigata-100 md:hover:bg-transparent md:hover:text-niigata-600 transition-colors"
                >
                  お客様の声
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => handleNavClick(e, "faq")}
                  className="block py-2 px-4 text-niigata-800 hover:bg-niigata-100 md:hover:bg-transparent md:hover:text-niigata-600 transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
            <div className="mt-4 md:hidden px-4 pb-4">
              <Link to="/product/dummy-1" className="w-3/4 mx-auto block">
                <Button className="w-full bg-rice-500 hover:bg-rice-700 text-niigata-900">
                  今すぐ購入
                </Button>
              </Link>
            </div>
          </nav>
          <Link to="/product/dummy-1" className="hidden md:block">
            <Button className="bg-rice-500 hover:bg-rice-700 text-niigata-900">
              今すぐ購入
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;