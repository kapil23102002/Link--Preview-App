import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Article1 from "./components/ArticlePage1";
import Article2 from "./components/ArticlePage2";
import Article3 from "./components/ArticlePage3";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/article1" element={<Article1 />} />
          <Route path="/article2" element={<Article2 />} />
          <Route path="/article3" element={<Article3 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
