import React from 'react';
import MetaTags from './Meta';

function Article1() {
  return (
    <div>
      <MetaTags
        title="Article 1 Title"
        description="This is the description for Article 1."
        image={`${process.env.PUBLIC_URL}/img/article1.jpg`}
      />
      <h1>Article 1</h1>
      <p>This is the content for Article 1...</p>
    </div>
  );
}

export default Article1;
