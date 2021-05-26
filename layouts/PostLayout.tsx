import Link from "@/components/Link"
import PageTitle from "@/components/PageTitle"
import SectionContainer from "@/components/SectionContainer"
import { BlogSeo } from "@/components/SEO"
import Tag from "@/components/Tag"
import siteMetadata from "@/data/siteMetadata.json"
import React from "react"
import { InternalTemplate } from "@/components/InternalTemplate"

export default function PostLayout({
  children,
  frontMatter,
  next,
  prev,
}: {
  children?: JSX.Element | JSX.Element[] | React.ReactNode
  frontMatter: FrontMatter
  next?: FrontMatter
  prev?: FrontMatter
}) {
  const { slug, fileName, date, title, tags } = frontMatter

  return (
    <SectionContainer>
      <BlogSeo
        {...frontMatter}
        url={`${siteMetadata.siteUrl}/blog/${frontMatter.slug}`}
      />
      {children}
    </SectionContainer>
  )
}
