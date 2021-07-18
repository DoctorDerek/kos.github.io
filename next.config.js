const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

module.exports = withBundleAnalyzer({
  async redirects() {
    return [
      {
        source: "/res",
        destination: "/home-internet-in-kingston-ontario/residential-services",
        permanent: true,
      },
      {
        source: "/residential",
        destination: "/home-internet-in-kingston-ontario/residential-services",
        permanent: true,
      },
      {
        source: "/home-internet-in-kingston-ontario",
        destination: "/home-internet-in-kingston-ontario/residential-services",
        permanent: true,
      },
      {
        source: "/res/high-speed-cable",
        destination: "/home-internet-in-kingston-ontario/high-speed-cable",
        permanent: true,
      },
      {
        source: "/res/wireless",
        destination: "/home-internet-in-kingston-ontario/wireless-broadband",
        permanent: true,
      },
      {
        source: "/res/high-speed-dsl",
        destination: "/home-internet-in-kingston-ontario/high-speed-dsl",
        permanent: true,
      },
      {
        source: "/res/voip",
        destination: "/home-internet-in-kingston-ontario/voip",
        permanent: true,
      },
      {
        source: "/res/mail",
        destination: "/home-internet-in-kingston-ontario/mail",
        permanent: true,
      },
      {
        source: "/res/dial-up",
        destination: "/home-internet-in-kingston-ontario/dial-up",
        permanent: true,
      },
      {
        source: "/bus",
        destination: "/business-internet-in-kingston-ontario/business-services",
        permanent: true,
      },
      {
        source: "/business",
        destination: "/business-internet-in-kingston-ontario/business-services",
        permanent: true,
      },
      {
        source: "/business-internet-in-kingston-ontario",
        destination: "/business-internet-in-kingston-ontario/business-services",
        permanent: true,
      },
      {
        source: "/bus/high-speed-cable",
        destination: "/business-internet-in-kingston-ontario/high-speed-cable",
        permanent: true,
      },
      {
        source: "/bus/wireless",
        destination:
          "/business-internet-in-kingston-ontario/wireless-broadband",
        permanent: true,
      },
      {
        source: "/bus/high-speed-dsl",
        destination: "/business-internet-in-kingston-ontario/high-speed-dsl",
        permanent: true,
      },
      {
        source: "/bus/voip",
        destination: "/business-internet-in-kingston-ontario/voip",
        permanent: true,
      },
      {
        source: "/bus/mail",
        destination: "/business-internet-in-kingston-ontario/mail",
        permanent: true,
      },
      {
        source: "/bus/colocate-server",
        destination: "/business-internet-in-kingston-ontario/colocate-server",
        permanent: true,
      },
      {
        source: "/res/dial-up",
        destination: "/business-internet-in-kingston-ontario/dial-up",
        permanent: true,
      },
    ]
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  webpack5: true,
  webpack: (config, { dev, isServer, webpack }) => {
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

    config.module.rules.push({
      test: /\.tsx?$/,
      exclude: /node_modules/,
      loader: "esbuild-loader",
      options: { loader: "tsx", target: "esnext" },
    })

    config.plugins.push(
      new webpack.ProvidePlugin({
        React: "react",
      })
    ) // Support JSX Transform per https://dev.to/rsa/speed-up-next-js-build-with-typescript-and-tailwind-css-418d

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
