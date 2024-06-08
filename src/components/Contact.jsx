import React from 'react';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  return (
    <>
      <Helmet>
        {/* For Google */}
        <title>About Us</title>
        <meta
          name="description"
          content="Get in touch with us for any inquiries or support. We're here to help you with any questions or concerns you may have."
        />
        <meta
          name="keywords"
          content="contact us, inquiries, support, customer service, help, questions"
        />
        {/* For Facebook Open Graph */}
        <meta property="og:title" content="Contact Us" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://i.ibb.co/brpy9j5/contact-us-og-tag.jpg"
        />
        <meta
          property="og:url"
          content="https://www.myntra.com/contactus"
        />
        <meta
          property="og:description"
          content="Reach out to us for any inquiries or support. Our team is here to assist you with any questions or concerns."
        />
        {/* For Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="About Us" />
        <meta
          property="twitter:url"
          content="https://www.myntra.com/contactus"
        />
        <meta
          property="twitter:description"
          content="Get in touch with us for any inquiries or support. We're here to help you with any questions or concerns you may have."
        />
        <meta
          property="twitter:image"
          content="https://i.ibb.co/brpy9j5/contact-us-og-tag.jpg"
        />
      </Helmet>
      Contact Page
    </>
  );
};

export default Contact;
