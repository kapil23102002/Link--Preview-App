import React from 'react';
import MetaTags from './Meta';

function Article2() {
  return (
    <div>
      <MetaTags
        title="Article 2 Title"
        description="This is the description for Article 2."
        image={`${process.env.PUBLIC_URL}/img/article2.jpg`}
      />
      <h1>Article 2</h1>
      <p>This is the content for Article 2...</p>
    </div>
  );
}

export default Article2;
