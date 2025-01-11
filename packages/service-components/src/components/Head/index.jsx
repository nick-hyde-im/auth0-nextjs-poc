import React from 'react';
import NextHead from 'next/head';

const Head = ({ title }) => (
  <NextHead>
    <title>{title ? `${title} - Next.js Auth0 SDK` : 'Next.js Auth0 SDK - Proof of Concept'}</title>
    <meta name="description" content="Proof of concept for using the Next.js SDK for Auth0." />
    <link rel="icon" href="/favicon.ico" />
  </NextHead>
);

export default Head;