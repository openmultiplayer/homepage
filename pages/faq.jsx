import React from "react";
import Head from "next/head";

import { HeadContent } from "../components/HeadContent";
import Wordmark from "../components/icons/Wordmark";

const Index = () => (
  <div className="container">
    <HeadContent title="FAQ" />

    <main>
      <header className="header">
        <Wordmark width={300} height={"100%"} stroke="#d1cec8" background="#161f2b" />
      </header>
      <section className="content">
        <h1>Open Multiplayer</h1>
        <p>
moo        </p>
        <hr />
      </section>
    </main>
  </div>
);

export default Index;
