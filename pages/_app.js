import "../styles/globals.css";
import Head from "next/head";
import Navigation from "../Components/Navigation";
import "../public/assets/css/app.min.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  <>
    <div className="cursor-direction bg-indigo-100"></div>
    <Head>
      <title>Metahagane - NFT Trading Game</title>

      <meta charSet="utf-8" />
      <meta name="description" content="" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  </>;

  return (
    <div>
      <Navigation />
      <Component {...pageProps} />
      <Script src="/build.min.js"></Script>
    </div>
  );
}

export default MyApp;
