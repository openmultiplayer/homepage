import React from 'react';

import { Link } from './Typography';
import Discord from './icons/Discord';
import Forum from './icons/Forum';
import GitHub from './icons/GitHub';

const Socials = ({ colour = '#d1cec8' }) => {
  return (
    <div>
      <span>
        <Link href="https://discordapp.com/invite/hURGKHJ">
          <Discord fill={colour} />
        </Link>
      </span>
      <span>
        <Link href="https://www.burgershot.gg">
          <Forum fill={colour} />
        </Link>
      </span>
      <span>
        <Link href="https://www.github.com/openmultiplayer">
          <GitHub fill={colour} />
        </Link>
      </span>
    </div>
  );
};

export default Socials;
