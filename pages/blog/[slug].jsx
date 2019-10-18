/* eslint-disable global-require */

import React from 'react';

const Post = ({ slug }) => {
  // eslint-disable-next-line import/no-dynamic-require
  const post = require(`../../posts/${slug}.mdx`);

  return (
    <>
      <main>
        <article className="content">
          <div className="meta">
            <p>Author: {post.meta.author}</p>
            <p>Date: {post.meta.date}</p>
          </div>
          <post.default />
        </article>
      </main>

      <style jsx>
        {`
          article {
            padding: 10px;
            max-width: 640px;
          }
        `}
      </style>
    </>
  );
};

Post.getInitialProps = ({ query: { slug } }) => ({ slug });

export default Post;
