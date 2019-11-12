import React from 'react';
import moment from 'moment';

import {
  Content,
  HeadingLarge,
  HeadingMedium,
  Anchor,
  Paragraph
} from '../../components/Typography';
import { HeadContent } from '../../components/HeadContent';

const Posts = ({ list }) =>
  list.map((v) => {
    return (
      <section key={v.slug}>
        <HeadingMedium>
          <Anchor href={`/blog/${v.slug}`}>{v.title}</Anchor>
          <Paragraph size="small">
            <time>
              {moment(v.date).format('YYYY-MM-DD')} by {v.author}
            </time>
          </Paragraph>
        </HeadingMedium>
      </section>
    );
  });

const NoContent = () => <h3>There are currently no posts.</h3>;

const PostList = ({ list }) => (list ? <Posts list={list} /> : <NoContent />);

const Page = () => {
  return (
    <>
      <HeadContent title="Blog" />

      <main>
        <Content>
          <article>
            <HeadingLarge>Development Blog</HeadingLarge>
            <PostList list={process.env.BLOG_POST_LIST} />
          </article>
        </Content>
      </main>
    </>
  );
};

export default Page;
