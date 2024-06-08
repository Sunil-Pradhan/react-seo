// Import Lib
import React from 'react';
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <>
      <Helmet>
        {/* For Google */}
        <title>About Us</title>
        <meta
          name="description"
          content="Learn more about our company's history, mission, and values. Meet the team that makes it all happen."
        />
        {/* For Facebook Open Graph */}
        <meta property="og:title" content="About Us" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://i.ibb.co/tHJCM6d/about-us-og-tag.jpg"
        />
        <meta
          property="og:url"
          content="https://www.myntra.com/men-sports-wear-tshirts"
        />
        <meta
          property="og:description"
          content="Learn more about our company's history, mission, and values. Meet the team that makes it all happen."
        />
        {/* For Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="About Us" />
        <meta
          property="twitter:url"
          content="https://www.myntra.com/men-sports-wear-tshirts"
        />
        <meta
          property="twitter:description"
          content="Learn more about our company's history, mission, and values. Meet the team that makes it all happen."
        />
        <meta
          property="twitter:image"
          content="https://i.ibb.co/tHJCM6d/about-us-og-tag.jpg"
        />
      </Helmet>
      About Page
    </>
  );
};

export default About;
