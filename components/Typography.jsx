import React from 'react';

export const Content = ({ children, centred = false, font = 'english-grotesque' }) => (
  <>
    <div>{children}</div>
    <style jsx>{`
      div {
        margin: auto;
        max-width: 600px;
        padding: 1em;
        text-align: ${centred ? 'center' : 'left'};
        color: #d1cec8;
        font-family: ${font};
      }
    `}</style>
  </>
);

export const HeadingLarge = ({ children }) => {
  return (
    <h1>
      {children}
      <style jsx>{`
        h1 {
          margin: 0 0 0.5em 0;
          font-weight: 700;
          font-size: xx-large;
          color: #d1cec8;
        }
      `}</style>
    </h1>
  );
};

export const HeadingMedium = ({ children }) => {
  return (
    <h2>
      {children}
      <style jsx>{`
        h2 {
          font-weight: 300;
          color: #d1cec8;
        }
      `}</style>
    </h2>
  );
};

export const Paragraph = ({ children, centred = false, size = 'medium' }) => {
  return (
    <p>
      {children}
      <style jsx>{`
        p {
          margin: 0 0 0 0;
          line-height: 1.5;
          font-size: ${size};
          text-align: ${centred ? 'center' : 'justify'};
          margin-bottom: 1em;
          color: #d1cec8;
        }
      `}</style>
    </p>
  );
};

export const OrderedList = ({ children }) => (
  <>
    <ol>
      {children.map((v) => (
        <>{v}</>
      ))}
    </ol>
    <style jsx global>{`
      li {
        line-height: 1.8;
        text-align: justify;
        padding-bottom: 1em;
      }
    `}</style>
  </>
);

export const Anchor = ({ href, children, ...props }) => (
  <>
    <a href={href} {...props}>
      {children}
    </a>
    <style jsx>{`
      a {
        color: inherit;
      }
      a:hover {
        color: orange;
      }
    `}</style>
  </>
);

export const Image = (props) => (
  <>
    <img {...props} />

    <style jsx>{`
      img {
        max-width: 100%;
      }
    `}</style>
  </>
)