import React from 'react';

import { Content, Paragraph } from './Typography';

const FooterContent = () => (
  <>
    <footer>
      <Content>
        <Paragraph centred size="small">
          open.mp is not associated with Rockstar Games, Take Two Interactive or San Andreas
          Multiplayer.
        </Paragraph>
      </Content>
    </footer>

    <style jsx>{`
      footer {
        text-align: center;
        padding: 10px;
      }
    `}</style>
  </>
);

export { FooterContent };
