import React from 'react';
import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children, title }) => (
  <div className="flex justify-center min-h-screen">
    <Head>
      <title>{title ? `${title} - Next.js Auth0 SDK` : 'Next.js Auth0 SDK - Proof of Concept'}</title>
      <meta name="description" content="Proof of concept for using the Next.js SDK for Auth0." />
      <link rel="icon" href="/favicon.ico" />
    </Head>
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