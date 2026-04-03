import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({
  title,
  description,
  path = '/',
  image = '/hero-bg.png',
  schema = null,
}) {
  const siteName = 'Chandramukhi Sales';
  const baseUrl = 'https://chandramukhi-sales.com';
  const url = `${baseUrl}${path}`;
  const imageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;
  const fullTitle = `${title} | ${siteName}`;
  const defaultSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteName,
    url,
    image: imageUrl,
    telephone: '+91 99231 57599',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Sr.No.511, Pune–Nagar Road, Opp. John Deere Training Center, Wagholi',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      postalCode: '412207',
      addressCountry: 'IN',
    },
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index,follow" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <link rel="canonical" href={url} />
      <script type="application/ld+json">
        {JSON.stringify(schema || defaultSchema)}
      </script>
    </Helmet>
  );
}
