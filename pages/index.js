import React from "react";
import Head from "next/head";
import Work from "components/Work";
import styles from "styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>shae overlieden</title>
        <meta name="description" content="fine artist/art direction/photographer" />
        <link rel="icon" href="/cat.ico" />
      </Head>
      <main>
          <div>
            <Work styles={styles} />
          </div>
      </main>
    </div>
  );
}
