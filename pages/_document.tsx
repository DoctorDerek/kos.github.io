import Document, { Html, Head, Main, NextScript } from "next/document"

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
          <link rel="alternate" type="application/rss+xml" href="/index.xml" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap"
            media="print"
            onLoad={
              ("this.media='all'" as unknown) as React.ReactEventHandler<HTMLLinkElement>
            }
          />
          <noscript>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap"
            />
          </noscript>
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&display=swap"
            media="print"
            onLoad={
              ("this.media='all'" as unknown) as React.ReactEventHandler<HTMLLinkElement>
            }
          />
          <noscript>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&display=swap"
            />
          </noscript>
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
