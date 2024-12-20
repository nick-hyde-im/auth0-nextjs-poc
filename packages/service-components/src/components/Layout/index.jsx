import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => (
  <div className="flex justify-center min-h-screen">
    <div className="flex flex-col w-full max-w-3xl" style={{ maxWidth: 800 }}>
      <Header />
      <main className="flex-1 p-4">
        {children}
      </main>
      <Footer className="p-4"/>
    </div>
  </div>
);

export default Layout;