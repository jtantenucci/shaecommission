import React from "react";
import Head from "next/head";
import Work from "components/Work";
import styles from "styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jake LaMothe</title>
        <meta name="description" content="art direction/graphic design" />
        <link rel="icon" href="/Scribble.ico" />
      </Head>
      <main>
          <div>
            <Work styles={styles} />
          </div>
      </main>
    </div>
  );
}
