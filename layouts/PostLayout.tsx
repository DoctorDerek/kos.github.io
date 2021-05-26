import SectionContainer from "@/components/SectionContainer"
import { BlogSeo } from "@/components/SEO"
import siteMetadata from "@/data/siteMetadata.json"
import React from "react"
import { InternalTemplate } from "@/layouts/InternalTemplate"
import HoverBulletNavMenu from "@/components/HoverBulletNavMenu"
import PricingSection, {
  pricingPackages,
  pricingSectionFootnotes,
  PricingSectionFootnotes,
  HeadingH2AndPostalCodeCheck,
} from "@/components/PricingSection"

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
  const { slug, title } = frontMatter

  return (
    <>
      <BlogSeo
        {...frontMatter}
        url={`${siteMetadata.siteUrl}/blog/${frontMatter.slug}`}
      />
      <InternalTemplate
        title={title}
        slug={slug}
        hoverBulletNavMenu={<HoverBulletNavMenu type="Residential" />}
        fullWidth={true}
        pricingSection={<PricingSection pricingPackages={pricingPackages} />}
        footnotesSection={
          <PricingSectionFootnotes
            pricingSectionFootnotes={pricingSectionFootnotes}
          />
        }
      >
        <HeadingH2AndPostalCodeCheck heading="Get an instant connection with Internet over cable at a price that suits your needs." />
      </InternalTemplate>
      {children}
    </>
  )
}
