import React from "react";
import Head from "next/head";

export default function HeadComponent({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="art direction/graphic design" />
      <link rel="icon" href="/Scribble.ico" />
    </Head>
  );
}
