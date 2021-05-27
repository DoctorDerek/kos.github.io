import { PageSeo } from "@/components/SEO"
import siteMetadata from "@/data/siteMetadata.json"
import React from "react"
import Image from "@/components/CustomImage"
import Link from "@/components/Link"
import { BUTTON, DIVIDER } from "@/components/UTILS"
import { classNames } from "@/lib/utils"
import PostalCodeCheckForm from "@/components/PostalCodeCheckForm"
import HoverBulletNavMenu from "@/components/HoverBulletNavMenu"
import PricingPackagesSection from "@/components/PricingPackagesSection"
import PricingPackagesSectionFootnotes from "@/components/PricingPackagesSectionFootnotes"
/*
import { InternalTemplate } from "@/layouts/InternalTemplate"
import HoverBulletNavMenu from "@/components/HoverBulletNavMenu"
import PricingSection, {
  PricingSectionFootnotes,
} from "@/components/PricingSection"

*/
/*e({
  title,
  slug,
  heading,
  fullWidth = false,
  pricingSection = null,
  hoverBulletNavMenu = null,
  pricingFootnotesSection = null,
  showOrderNowButton = false,
  children,
}: {
  title: string | JSX.Element
  slug: string
  heading: string
  fullWidth?: boolean
  pricingSection?: JSX.Element | null
  hoverBulletNavMenu?: JSX.Element | null
  pricingFootnotesSection?: JSX.Element | null
  showOrderNowButton?: boolean
  children?: JSX.Element | JSX.Element[] | React.ReactNode
}): JSX.Element {*/

/*
hoverBulletNavMenu={<HoverBulletNavMenu type="Residential" />}
      fullWidth={true}
      pricingSection={<PricingSection pricingPackages={pricingPackages} />}
      pricingFootnotesSection={
        <PricingSectionFootnotes
          pricingSectionFootnotes={pricingSectionFootnotes}
        />
      }
      */

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
}): JSX.Element {
  const {
    slug,
    title,
    heading,
    fullWidth,
    hoverBulletNavMenu,
    showOrderNowButton,
    pricingPackages,
    pricingSectionFootnotes,
  } = frontMatter

  function PageLayoutJSX() {
    return (
      <>
        <PageSeo
          title={title.replaceAll("*", "")}
          description=""
          url={`${siteMetadata.siteUrl}/${slug}`}
        />
        <div className="grid w-full xl:h-32 lg:h-28 md:h-24 sm:h-20 h-16 border-blue-brand border-solid border-t-[6px]">
          <Image src="/images/footer-bg.jpg" alt="" />
          {/* alt="" acceptable for purely decorative elements */}
        </div>
        <div
          className={classNames(
            "py-8 mx-auto xl:py-16 lg:py-14 md:py-12 sm:py-10"
          )}
        >
          <TitleHeadingAndChildren />
          {pricingPackages && (
            <div className="pt-6">
              <PricingPackagesSection pricingPackages={pricingPackages} />
            </div>
          )}
          {pricingSectionFootnotes && (
            <div className="py-6">
              <PricingPackagesSectionFootnotes
                pricingSectionFootnotes={pricingSectionFootnotes}
              />
            </div>
          )}
          <HoverBulletNavMenuAndOrderNowButton />
        </div>
      </>
    )
  }

  function TitleHeadingAndChildren() {
    return (
      <div
        className={classNames(
          fullWidth ? "max-w-5xl md:px-6 lg:px-12" : "max-w-xl md:px-0",
          "px-4 mx-auto"
        )}
      >
        <h1 className="text-left color decor">
          <TitleJSXWithOptionalHighlighting />
        </h1>
        <DIVIDER />
        <div className="flex flex-col space-y-6">
          <HeadingH2 />
          <div className="prose">{children}</div>
          <PostalCodeCheckForm />
        </div>
      </div>
    )
  }

  function TitleJSXWithOptionalHighlighting() {
    // Highlight the part of the title marked with * asterisks (Markdown bold)
    // if any. For example a Markdown file might read `title: "Residential
    // *High Speed Cable* Packages in Kingston & Belleville, Ontario"`
    if (title.includes("*")) {
      const highlightRegExp = /(.+)\*(.+)\*(.+)/
      return (
        <>
          {title.replace(highlightRegExp, "$1")}
          <span className="text-red-brand">
            {title.replace(highlightRegExp, "$2")}
          </span>
          {title.replace(highlightRegExp, "$3")}
        </>
      )
    } else return <>{title}</>
  }

  function HeadingH2() {
    return (
      <div className="flex flex-col space-y-6">
        <h2 className="text-xl text-left">{heading}</h2>
      </div>
    )
  }

  function HoverBulletNavMenuAndOrderNowButton() {
    return (
      <div className="max-w-xl mx-auto">
        <DIVIDER />
        {hoverBulletNavMenu && (
          <>
            <div className="pb-4 text-2xl font-semibold tracking-tight color">
              Please <Link href="/contact">contact our office</Link> for more
              information, or select from one of our services below.
            </div>
            <HoverBulletNavMenu type={hoverBulletNavMenu} />
          </>
        )}
        {showOrderNowButton && (
          <div className="py-6">
            <BUTTON href="/order/" text="Get connected" />
          </div>
        )}
      </div>
    )
  }

  return <PageLayoutJSX />
}
