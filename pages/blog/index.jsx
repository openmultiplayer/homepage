import React from 'react';
import Link from 'next/link';
import moment from 'moment';

import {
  Content,
  HeadingLarge,
  HeadingMedium,
  Anchor,
  Paragraph
} from '../../components/Typography';
import { HeadContent } from '../../components/HeadContent';
import { Wordmark } from '../../components/icons/Brand';
import { useLanguages } from '../../components/languages';
import Nav from '../../components/Nav';

const Posts = ({ list }) =>
  list
    .sort((a, b) => a.date < b.date)
    .map((v) => {
      return (
        <section key={v}>
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

const Item = ({ list }) => (list ? <Posts list={list} /> : <NoContent />);

const Page = () => {
  return (
    <>
      <HeadContent title="Blog" />

      <main>
        <Content>
          <article>
            <HeadingLarge>Development Blog</HeadingLarge>
            <Item list={process.env.BLOG_POST_LIST} />
          </article>
        </Content>
      </main>
    </>
  );
};

export default Page;
