import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, path = '/' }) {
  const siteName = 'Chandramukhi Sales';
  const baseUrl = 'https://chandramukhi-sales.com';
  const url = `${baseUrl}${path}`;
  const fullTitle = `${title} | ${siteName}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <link rel="canonical" href={url} />
    </Helmet>
  );
}
