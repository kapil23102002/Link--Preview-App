import React from 'react';
import './ArticlePage.css'; // optional for styling

const ArticlePage = ({ title, description, image }) => {
  return (
    <div className="article-page">
      <img src={image} alt={title} className="article-image" />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default ArticlePage;
