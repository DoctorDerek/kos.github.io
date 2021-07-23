import { DefaultSeo } from "next-seo"

import siteMetadata from "@/data/siteMetadata.json"

const SEO = () => (
  <DefaultSeo
    {...{
      title: siteMetadata.title,
      description: siteMetadata.description,
      openGraph: {
        type: "website",
        locale: siteMetadata.language,
        url: siteMetadata.siteUrl,
        title: siteMetadata.title,
        description: siteMetadata.description,
      },
    }}
  />
)

export default SEO
