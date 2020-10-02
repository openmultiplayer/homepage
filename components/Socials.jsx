import React from 'react';

import { Anchor } from './Typography';
import Discord from './icons/Discord';
import Forum from './icons/Forum';
import GitHub from './icons/GitHub';

const Socials = ({ colour = '#d1cec8' }) => {
  return (
    <div>
      <span>
        <Anchor href="https://discord.gg/samp">
          <Discord fill={colour} />
        </Anchor>
      </span>
      <span>
        <Anchor href="https://www.burgershot.gg">
          <Forum fill={colour} />
        </Anchor>
      </span>
      <span>
        <Anchor href="https://www.github.com/openmultiplayer">
          <GitHub fill={colour} />
        </Anchor>
      </span>
    </div>
  );
};

export default Socials;
