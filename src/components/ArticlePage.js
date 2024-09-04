import React from 'react';
import { Helmet } from 'react-helmet-async';
import './ArticlePage.css';

const ArticlePage = ({ title, description, image }) => {
  return (
    <div className="article-page">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
      <img src={image} alt={title} className="article-image" />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default ArticlePage;
