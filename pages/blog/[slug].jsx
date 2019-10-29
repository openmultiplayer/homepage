/* eslint-disable global-require */

import React from 'react';
import moment from 'moment';

import { Content, Paragraph } from '../../components/Typography';

const Post = ({ slug }) => {
  // eslint-disable-next-line import/no-dynamic-require
  const post = require(`../../posts/${slug}.mdx`);

  return (
    <>
      <main>
        <article>
          <Content>
            <aside>
              <Paragraph>
                Posted {moment(post.meta.date).format('YYYY-MM-DD')} by {post.meta.author}
              </Paragraph>
            </aside>
            <post.default />
          </Content>
        </article>
      </main>

      <style jsx global>
        {`
          article {
            padding: 10px;
            max-width: 640px;
            margin: auto;
          }
          pre {
            text-align: left;
          }
        `}
      </style>
    </>
  );
};

Post.getInitialProps = ({ query: { slug } }) => ({ slug });

export default Post;
