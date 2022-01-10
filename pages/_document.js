import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/favicon.png" type="images/x-icon" />{" "}
          {/* this gives error TODO: Fix it! */}
        </Head>
        <body>
          <Main />
          <NextScript src={"assets/js/build.min.js"} />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
