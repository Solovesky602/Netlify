// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="id">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          {/* Tidak ada <meta viewport> atau <title> di sini! */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
