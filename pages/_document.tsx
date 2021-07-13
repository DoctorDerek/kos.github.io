import Document, { Head, Html, Main, NextScript } from "next/document"

/*
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-120818650-1"
          ></script>
*/

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="description" content="KOS Internet" />
          <link
            rel="shortcut icon"
            type="images/png"
            href="images/smallkos.png"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
        </Head>
        <body className="overflow-hidden home">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
