import { PageSeo } from "@/components/SEO"
import siteMetadata from "@/data/siteMetadata.json"
import React from "react"
import Image from "@/components/CustomImage"
import Link from "@/components/Link"
import { BUTTON, DIVIDER } from "@/components/UTILS"
import { classNames, addLinkToTextIfPresent } from "@/lib/utils"
import PostalCodeCheckForm from "@/components/PostalCodeCheckForm"
import HoverBulletNavMenu from "@/components/HoverBulletNavMenu"
import PricingPackagesSection from "@/components/PricingPackagesSection"
import PricingPackagesSectionFootnotes from "@/components/PricingPackagesSectionFootnotes"
import PricingPackagesSectionDetailsSection from "@/components/PricingPackagesSectionDetails"

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
    pricingPackagesSectionFootnotes,
    pricingPackagesSectionDetails,
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
          {pricingPackagesSectionFootnotes && (
            <div className="py-6">
              <div className="pt-12 text-center">
                <PricingPackagesSectionFootnotes
                  pricingPackagesSectionFootnotes={
                    pricingPackagesSectionFootnotes
                  }
                />
              </div>
              <div className="py-12 text-3xl font-bold text-center text-blue-brand">
                Additional Details & Options
              </div>
              <PricingPackagesSectionDetailsSection
                pricingPackagesSectionDetails={pricingPackagesSectionDetails}
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

  /**
   * Highlight the part of the title marked with * asterisks (Markdown bold)
   * if any. For example a Markdown file might read `title: "Residential
   * **High Speed Cable** Packages in Kingston & Belleville, Ontario"`
   */
  function TitleJSXWithOptionalHighlighting() {
    if (title.includes("**")) {
      const highlightRegExp = /(.*)\*\*(.+)\*\*(.*)/
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
        <h2 className="text-xl text-left">
          {/*Up to one <a> or <Link> is supported in {heading}*/}
          {addLinkToTextIfPresent(heading)}
        </h2>
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
