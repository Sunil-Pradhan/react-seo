import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, type, scrImg, pageUrl }) => {
  return (
    <>
      <Helmet>
        {/* Standard metadata tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        {/* End standard metadata tags */}

        {/* Facebook tags */}
        <meta property="og:title" content={title} />
        <meta property="og:type" content={type} />
        <meta property="og:image" content={scrImg} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:description" content={description} />
        {/* End Facebook tags */}

        {/* Twitter tags */}
        <meta name="twitter:card" content={type} />
        <meta name="twitter:title" content={title} />
        <meta property="twitter:url" content={pageUrl} />
        <meta name="twitter:description" content={description} />
        {/* End Twitter tags */}
      </Helmet>
    </>
  );
};

export default SEO;
