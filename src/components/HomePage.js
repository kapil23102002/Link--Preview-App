import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Create a CSS file for styling

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to the Article Preview Site</h1>
      <p>Select an article to read:</p>
      <ul>
        <li>
          <Link to="/article1">Article 1</Link>
        </li>
        <li>
          <Link to="/article2">Article 2</Link>
        </li>
        <li>
          <Link to="/article3">Article 3</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
