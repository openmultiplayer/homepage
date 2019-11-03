import React from 'react';
import Link from 'next/link';

import { Content, HeadingLarge, HeadingMedium } from '../../components/Typography';

const Posts = ({ list }) =>
  list.map((v) => {
    return (
      <section key={v}>
        <Link href={`/blog/${v}`}>
          <a>
            <HeadingMedium>{v}</HeadingMedium>
          </a>
        </Link>
      </section>
    );
  });

const NoContent = () => <h3>There are currently no posts.</h3>;

const Item = ({ list }) => (list ? <Posts list={list} /> : <NoContent />);

const Page = () => {
  return (
    <>
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
