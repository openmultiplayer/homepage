import React from 'react';
import Router from 'next/router';
import withGA from 'next-ga';

import App, { Container } from 'next/app';

export default withGA(process.env.GA_ID, Router)(
  class extends App {
    render() {
      const { Component, pageProps } = this.props;
      return (
        <Container>
          <Component {...pageProps} />
        </Container>
      );
    }
  }
);
