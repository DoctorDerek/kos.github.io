import Document, { Html, Head, Main, NextScript } from "next/document"
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-120818650-1"
          ></script>
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{ __html: process.env.googleAnalytics }}
          ></script>

          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="description" content="KOS Internet" />
          <link
            rel="shortcut icon"
            type="images/png"
            href="images/smallkos.png"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i"
            rel="stylesheet"
          />
        </Head>
        <body className="home">
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
