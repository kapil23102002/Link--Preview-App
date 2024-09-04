import React from 'react';
import { Helmet } from 'react-helmet';
import './ArticlePage.css'; // Create CSS for styling

const ArticlePage = ({ title, description, image }) => {
  return (
    <div className="article-page">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
      <div className="article-content">
        <h1>{title}</h1>
        <img src={image} alt={title} />
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ArticlePage;
