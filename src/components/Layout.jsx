import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24"> {/* ヘッダーの高さに合わせてパディングを調整 */}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;