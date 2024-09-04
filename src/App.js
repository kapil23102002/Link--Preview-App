import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Article1 from './components/ArticlePage1';
import Article2 from './components/ArticlePage2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Article1 />} />
        <Route path="/article-2" element={<Article2 />} />
      </Routes>
    </Router>
  );
}

export default App;
