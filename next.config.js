const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

const fs = require("fs")

module.exports = withBundleAnalyzer({
  env: {
    jquery: fs.readFileSync("./public/js/jquery.js").toString(),
    bootstrap: fs
      .readFileSync("./public/js/plugins/bootstrap.min.js")
      .toString(),
    nivo: fs
      .readFileSync("./public/js/plugins/jquery.nivo.slider.js")
      .toString(),
    slick: fs.readFileSync("./public/js/plugins/slick.min.js").toString(),
    magnific: fs
      .readFileSync("./public/js/plugins/jquery.magnific-popup.min.js")
      .toString(),
    waypoints: fs
      .readFileSync("./public/js/plugins/jquery.waypoints.min.js")
      .toString(),
    count: fs.readFileSync("./public/js/plugins/jquery.countTo.js").toString(),
    form: fs.readFileSync("./public/js/plugins/jquery.form.js").toString(),
    validate: fs
      .readFileSync("./public/js/plugins/jquery.validate.min.js")
      .toString(),
    custom: fs.readFileSync("./public/js/custom.js").toString(),
    accessibility: fs
      .readFileSync("./public/js/accessibilitymenu.js")
      .toString(),
  },
  pageExtensions: ["js", "jsx", "md", "mdx"],
  experimental: {
    modern: true,
  },
  webpack: (config, { dev, isServer }) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|mp4)$/i,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next",
            name: "static/media/[name].[hash].[ext]",
          },
        },
      ],
    })

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    })

    if (!dev && !isServer) {
      // Replace React with Preact only in client production build
      Object.assign(config.resolve.alias, {
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
      })
    }

    return config
  },
})
