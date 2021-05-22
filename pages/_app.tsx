import React from "react";
import Head from "next/head";

import '../style/index.scss';

export default function App ({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <title>WineDay</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
