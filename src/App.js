import React from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ArticlePage from './components/ArticlePage';
import { useParams } from 'react-router-dom';
import articles from './components/data';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <nav>
            <ul>
              {articles.map((article) => (
                <li key={article.id}>
                  <Link to={`/article/${article.id}`}>{article.title}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/article/:id"
              element={<ArticleWrapper />}
            />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

const Home = () => (
  <div>
    <h1>Welcome to the Article Site</h1>
    <p>Select an article to read.</p>
  </div>
);

const ArticleWrapper = () => {
  const { id } = useParams();
  const article = articles.find((a) => a.id === parseInt(id));
  return article ? <ArticlePage {...article} /> : <h2>Article not found</h2>;
};

export default App;
