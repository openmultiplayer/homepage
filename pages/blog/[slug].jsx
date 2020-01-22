import React from 'react';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';

import { Content, Paragraph } from '../../components/Typography';

const Post = ({ post }) => (
  <>
    <main>
      <article>
        <Content>
          <aside>
            <Paragraph>
              Posted {format(parseISO(post.meta.date), 'yyyy-MM-dd')} by {post.meta.author}
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

Post.getInitialProps = async ({ query: { slug } }) => {
  const post = await import(`../../posts/${slug}.mdx`);
  return { post };
};

export default Post;
