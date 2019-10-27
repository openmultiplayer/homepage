import React from 'react';
import Link from 'next/link';

const Posts = ({ list }) =>
  list.map((v) => {
    return (
      <section key={v}>
        <Link href={`/blog/${v}`}>
          <a>
            <h2>{v}</h2>
          </a>
        </Link>
      </section>
    );
  });

const NoContent = () => <h3>There are currently no posts.</h3>;

const Content = ({ list }) => (list ? <Posts list={list} /> : <NoContent />);

const Page = () => {
  return (
    <>
      <main>
        <article className="content">
          <h1>open.mp Development Blog</h1>
          <Content list={process.env.BLOG_POST_LIST} />
        </article>
      </main>
    </>
  );
};

export default Page;
