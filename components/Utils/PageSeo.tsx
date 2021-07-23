import { NextSeo } from "next-seo"

import siteMetadata from "@/data/siteMetadata.json"

const PageSeo = ({
  title,
  description,
  url,
}: {
  title: string
  description: string
  url: string
}) => {
  return (
    <NextSeo
      title={`${title} – ${siteMetadata.title}`}
      description={description}
      canonical={url}
      openGraph={{
        url,
        title,
        description,
      }}
    />
  )
}
export default PageSeo
