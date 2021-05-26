import { PageSeo } from "@/components/SEO"
import siteMetadata from "@/data/siteMetadata.json"
import React from "react"
import { InternalTemplate } from "@/layouts/InternalTemplate"
import HoverBulletNavMenu from "@/components/HoverBulletNavMenu"
import PricingSection, {
  PricingSectionFootnotes,
} from "@/components/PricingSection"

export default function PageLayout({
  children,
  frontMatter,
  next,
  prev,
}: {
  children?: JSX.Element | JSX.Element[] | React.ReactNode
  frontMatter: PageFrontMatter
  next?: PageFrontMatter
  prev?: PageFrontMatter
}) {
  const {
    slug,
    title,
    heading,
    pricingPackages,
    pricingSectionFootnotes,
  } = frontMatter

  return (
    <>
      <PageSeo
        title={title}
        description=""
        url={`${siteMetadata.siteUrl}/${frontMatter.slug}`}
      />
      <InternalTemplate
        title={title}
        slug={slug}
        heading={heading}
        hoverBulletNavMenu={<HoverBulletNavMenu type="Residential" />}
        fullWidth={true}
        pricingSection={<PricingSection pricingPackages={pricingPackages} />}
        pricingFootnotesSection={
          <PricingSectionFootnotes
            pricingSectionFootnotes={pricingSectionFootnotes}
          />
        }
      >
        {children}
      </InternalTemplate>
    </>
  )
}
