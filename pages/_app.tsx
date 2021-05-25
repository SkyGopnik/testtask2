import React from "react";
import Head from "next/head";

import '../style/index.scss';

export default function App ({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <title>WineDay</title>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&family=Yeseva+One&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
