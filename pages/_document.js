/*           <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-120818650-1"
          ></script>
          <script>
            window.dataLayer = window.dataLayer || [] function gtag(){" "}
            {dataLayer.push(arguments)}
            gtag("js", new Date()) gtag("config", "UA-120818650-1")
          </script>
*/

import Document, { Html, Head, Main, NextScript } from "next/document"
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charset="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="KOS Internet" />
          <title>Kingston Online Services</title>
          <link
            rel="shortcut icon"
            type="images/png"
            href="images/smallkos.png"
          />
          <link href="css/plugins/bootstrap.min.css" rel="stylesheet" />
          <link href="css/plugins/bootstrap-submenu.css" rel="stylesheet" />
          <link href="css/plugins/animate.min.css" rel="stylesheet" />
          <link href="css/plugins/nivo-slider.css" rel="stylesheet" />
          <link href="css/plugins/slick.css" rel="stylesheet" />
          <link href="css/plugins/magnific-popup.css" rel="stylesheet" />
          <link href="css/custom.css" rel="stylesheet" />
          <link href="font/icons/style.css" rel="stylesheet" />
          <link
            href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i"
            rel="stylesheet"
          />
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

          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{ __html: process.env.jquery }}
          ></script>
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{ __html: process.env.bootstrap }}
          ></script>
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{ __html: process.env.nivo }}
          ></script>
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{ __html: process.env.slick }}
          ></script>
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{ __html: process.env.magnific }}
          ></script>
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{ __html: process.env.waypoints }}
          ></script>
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{ __html: process.env.count }}
          ></script>
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{ __html: process.env.form }}
          ></script>
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{ __html: process.env.validate }}
          ></script>
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{ __html: process.env.custom }}
          ></script>
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{ __html: process.env.accessibility }}
          ></script>
          */
