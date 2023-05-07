import Head from "next/head";
import type { AppProps } from "next/app";
import "remixicon/fonts/remixicon.css";
import "@/styles/globals.scss";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="app">
      <Head>
        <title>Welcome - Giorgi Pasieshvili</title>
        <meta name="description" content="Portfolio Giorgi Pasieshvili" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>

      <Component {...pageProps} />
      <Analytics />
    </div>
  );
}
