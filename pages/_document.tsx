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
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: process.env.googleAnalytics as string,
            }}
          ></script>
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
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap"
            rel="stylesheet"
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

/*
          <script src="js/jquery.js"></script>
          <script src="js/plugins/bootstrap.min.js"></script>
          <script src="js/plugins/jquery.nivo.slider.js"></script>
          <script src="js/plugins/slick.min.js"></script>
          <script src="js/plugins/jquery.magnific-popup.min.js"></script>
          <script src="js/plugins/jquery.waypoints.min.js"></script>
          <script src="js/plugins/jquery.countTo.js"></script>
          <script src="js/plugins/jquery.form.js"></script>
          <script src="js/plugins/jquery.validate.min.js"></script>
          <script src="js/custom.js"></script>
          <script src="/js/accessibilitymenu.js"></script>
*/
