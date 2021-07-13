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
