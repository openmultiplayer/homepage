import React from 'react';
import { Logo } from './icons/Brand';

const BigLogo = () => {
  return (
    <header>
      <Logo width={300} height="100%" />

      <style jsx>{`
        header {
          text-align: center;
        }
      `}</style>
    </header>
  );
};

export default BigLogo;
