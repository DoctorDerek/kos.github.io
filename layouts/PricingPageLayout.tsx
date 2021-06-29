import { PageSeo } from "@/components/SEO"
import siteMetadata from "@/data/siteMetadata.json"
import React from "react"
import Image from "@/components/CustomImage"
import Link from "@/components/Link"
import { BUTTON, DIVIDER } from "@/components/UTILS"
import {
  classNames,
  addLinkToTextIfPresent,
  extractDollarsCentsAndFootnotesFromPrice,
} from "@/lib/utils"
import PostalCodeCheckForm from "@/components/PostalCodeCheckForm"
import HoverBulletNavMenu from "@/components/HoverBulletNavMenu"
import PricingPackagesSection from "@/components/PricingPackagesSection"
import PricingPackagesSectionFootnotes from "@/components/PricingPackagesSectionFootnotes"
import PricingPackagesSectionDetailsSection from "@/components/PricingPackagesSectionDetails"
import HoverBox from "@/components/HoverBox"
import PricingPackageColumnFootnotesAsLinks from "@/components/PricingPackageColumnFootnotesAsLinks"

export default function PricingPageLayout({
  children,
  frontMatter,
}: {
  children?: JSX.Element | JSX.Element[] | React.ReactNode
  frontMatter: PageFrontMatter
}): JSX.Element {
  const {
    slug,
    title,
    heading,
    fullWidth,
    showAvailabilityTool,
    hoverBulletNavMenu,
    showGetConnectedButton,
    pricingPackages,
    pricingPackagesSectionFootnotes,
    pricingPackagesSectionDetails,
    pricingPackagesSectionDetailsPromotion,
    pricingPackagesBlue,
    pricingPackagesBlueFootnotes,
  } = frontMatter
  const headings = Array.isArray(heading) ? heading : [heading]
  // support heading type, which is string | string[]

  function PageLayoutJSX() {
    return (
      <>
        <PageSeo
          title={title.replace(/\*/g, "")}
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
              {/* <PricingPackageColumn>s */}
              <PricingPackagesSection pricingPackages={pricingPackages} />
            </div>
          )}
          {(pricingPackagesSectionFootnotes ||
            (Array.isArray(pricingPackagesSectionDetails) &&
              pricingPackagesSectionDetails.length > 0)) && (
            <div className="py-6">
              {pricingPackagesSectionFootnotes && (
                <div className="pt-12 text-center">
                  <PricingPackagesSectionFootnotes
                    pricingPackagesSectionFootnotes={
                      pricingPackagesSectionFootnotes
                    }
                  />
                </div>
              )}
              {Array.isArray(pricingPackagesSectionDetails) &&
                pricingPackagesSectionDetails.length > 0 && (
                  <>
                    <div className="py-12 text-3xl font-bold text-center text-blue-brand">
                      Additional Details & Options
                    </div>
                    <PricingPackagesSectionDetailsPromotion />
                    <PricingPackagesSectionDetailsSection
                      pricingPackagesSectionDetails={
                        pricingPackagesSectionDetails
                      }
                    />
                  </>
                )}
            </div>
          )}
          {pricingPackagesBlue && (
            <>
              {pricingPackagesBlue.map((pricingPackageBlue) => {
                const { packageName, packagePrices, useSmallBlueBox } =
                  pricingPackageBlue
                return (
                  <div
                    key={packageName}
                    className={classNames(useSmallBlueBox ? "w-64" : "w-full")}
                  >
                    {packageName}
                    {packagePrices}
                  </div>
                )
              })}
            </>
          )}
          {(hoverBulletNavMenu || showGetConnectedButton) && (
            <HoverBulletNavMenuAndOrderNowButton />
          )}
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
        {headings.length > 0 && (
          <>
            <DIVIDER />
            <HeadingH2 />
          </>
        )}
        <div className="prose">{children}</div>
        {showAvailabilityTool && (
          <>
            <DIVIDER />
            <PostalCodeCheckForm />
          </>
        )}
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
        {headings.map((headingString: string) => (
          <h2 className="text-xl text-left" key={headingString}>
            {/*Up to one <a> or <Link> is supported in {headingString}*/}
            {addLinkToTextIfPresent(headingString)}
          </h2>
        ))}
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
              Please{" "}
              <Link href="/contact" className="hover:underline">
                contact our office
              </Link>{" "}
              for more information, or select from one of our services below.
            </div>
            <HoverBulletNavMenu type={hoverBulletNavMenu} />
          </>
        )}
        {showGetConnectedButton && (
          <div className="py-6">
            <BUTTON href="/order/" text="Get connected" />
          </div>
        )}
      </div>
    )
  }

  function PricingPackagesSectionDetailsPromotion() {
    if (pricingPackagesSectionDetailsPromotion) {
      const [match, dollars, cents, footnotes, duration] =
        extractDollarsCentsAndFootnotesFromPrice(
          pricingPackagesSectionDetailsPromotion
        )
      let beforeMatch = ""
      if (match !== duration) {
        // we found a valid price match
        const beforeMatchArray = /(.*)\$(\d+)\.?(\d+)?\^?([\d,]+)?(.+)?/.exec(
          pricingPackagesSectionDetailsPromotion
        )
        // separate out the before subgroup i.e. beforeMatchArray[1], if any
        beforeMatch = beforeMatchArray ? beforeMatchArray[1] : ""
      }
      return (
        <>
          <div className="max-w-6xl mx-auto mb-12">
            <HoverBox>
              <div className="max-w-3xl px-4 mx-auto text-3xl font-bold text-center text-red-brand">
                {beforeMatch}
                <span className="text-black">
                  {" "}
                  {dollars && (
                    <>
                      <span className="font-bold">${dollars}</span>
                      {cents && <sup className="text-lg">.{cents}</sup>}
                    </>
                  )}
                  {duration}
                  {footnotes && (
                    <sup className="text-lg">
                      {" "}
                      <PricingPackageColumnFootnotesAsLinks
                        color="black"
                        footnotes={footnotes}
                      />
                    </sup>
                  )}
                </span>
              </div>
            </HoverBox>
          </div>
        </>
      )
    }
    return null
  }

  return <PageLayoutJSX />
}
