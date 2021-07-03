import { PageSeo } from "@/components/SEO"
import siteMetadata from "@/data/siteMetadata.json"
import { Fragment } from "react"
import Image from "@/components/CustomImage"
import ImageFixed from "next/image"
import Link from "@/components/CustomLink"
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
import PricingPackagesSectionFootnotesAndDetails from "@/components/PricingPackagesSectionFootnotesAndDetails"
import PricingPackageColumnFootnotesAsLinks from "@/components/PricingPackageColumnFootnotesAsLinks"
import IconColumnSection from "@/components/IconColumnSection"
import OurTeamSection from "@/components/OurTeamSection"

export default function PricingPageLayout({
  slug,
  title,
  headings,
  fullWidth,
  showAvailabilityTool,
  featuredImage,
  hoverBulletNavMenu,
  showGetConnectedButton,
  pricingPackages,
  pricingPackagesSectionFootnotes,
  pricingPackagesSectionDetails,
  pricingPackagesSectionDetailsPromotion,
  pricingPackagesBlue,
  pricingPackagesBlueFootnotes,
  ourTeamSection,
  iconColumnSection,
  children,
}: PageFrontMatter & {
  children?: JSX.Element | JSX.Element[] | React.ReactNode
}): JSX.Element {
  // support string | string[] for convenience by wrapping strings with an array
  if (!Array.isArray(headings)) {
    headings = headings === undefined ? [] : [headings]
  }

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
      <div className="py-8 mx-auto xl:py-16 lg:py-14 md:py-12 sm:py-10">
        <TitleHeadingAndChildren />
        <PricingPackagesSection pricingPackages={pricingPackages} />
        <PricingPackagesSectionFootnotesAndDetails
          pricingPackagesSectionFootnotes={pricingPackagesSectionFootnotes}
          pricingPackagesSectionDetails={pricingPackagesSectionDetails}
          pricingPackagesSectionDetailsPromotion={
            pricingPackagesSectionDetailsPromotion
          }
        />
        <PricingPackagesBlueSection />
        <IconColumnSection iconColumnSection={iconColumnSection} />
        <OurTeamSection ourTeamSection={ourTeamSection} />
        <HoverBulletNavMenuAndGetConnectedButton />
      </div>
    </>
  )

  function PricingPackagesBlueSection() {
    if (!pricingPackagesBlue) return null
    return (
      <div className="flex flex-wrap justify-center">
        {pricingPackagesBlue.map((pricingPackageBlue) => {
          let { packageName, packagePrices, packageHeadings, useSmallBlueBox } =
            pricingPackageBlue
          if (packageHeadings) {
            // support string | string[] for packageHeadings
            packageHeadings = Array.isArray(packageHeadings)
              ? packageHeadings
              : [packageHeadings]
          }

          return (
            <Fragment key={packageName}>
              <PricingPackagesBlueColumnJSX />
            </Fragment>
          )

          function PricingPackagesBlueColumnJSX() {
            return (
              <>
                {
                  /*the <HoverBox> items are flex items; others are full-width*/
                  !useSmallBlueBox && (
                    <div className="w-full h-0">
                      {/*flex break before full-width (useSmallBlueBox===false)*/}
                    </div>
                  )
                }
                <div
                  className={classNames(
                    // (w-72 + mx-4) x 4 = max-w-[78rem]
                    // (4 "small" = 1 "full-width")
                    useSmallBlueBox ? "w-72" : "max-w-[78rem] w-full",
                    "bg-gradient-to-b from-teal-light to-blue-light",
                    "rounded-xl p-4 m-4 space-y-2",
                    "transition-all duration-500 hover:shadow-md"
                  )}
                >
                  <h4 className="text-white">{packageName}</h4>
                  <div className="py-4 pl-12 bg-white rounded-2xl">
                    <div className="text-blue-brand">
                      {
                        <PricingPackageBluePrice
                          packagePrice={packagePrices as string}
                        />
                      }
                    </div>
                    {packageHeadings && packageHeadings.length > 0 && (
                      <ul className="ml-12 list-disc">
                        {(packageHeadings as string[]).map((packageHeading) => (
                          <li key={packageHeading}>{packageHeading}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
                {
                  /*the <HoverBox> items are flex items; others are full-width*/
                  !useSmallBlueBox && (
                    <div className="w-full h-0">
                      {/*flex break after full-width (useSmallHoverBox===false)*/}
                    </div>
                  )
                }
              </>
            )
          }
          function PricingPackageBluePrice({
            packagePrice,
          }: {
            packagePrice: string
          }) {
            const [, dollars, cents, footnotes, duration] =
              extractDollarsCentsAndFootnotesFromPrice(packagePrice)
            return (
              <div className="text-blue-brand">
                {dollars && (
                  <div className="text-3xl font-bold">
                    ${dollars}
                    {cents && <>.{cents}</>}
                    <sup className="text-lg">
                      {footnotes && (
                        <>
                          {" "}
                          <PricingPackageColumnFootnotesAsLinks
                            color="black"
                            footnotes={footnotes}
                          />
                        </>
                      )}
                    </sup>
                  </div>
                )}
                <div className="text-lg text-gray-600">{duration}</div>
              </div>
            )
          }
        })}
        {pricingPackagesBlueFootnotes && (
          <PricingPackagesSectionFootnotes
            pricingPackagesSectionFootnotes={pricingPackagesBlueFootnotes}
          />
        )}
      </div>
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
          <DIVIDER />
        </h1>
        <HeadingH2 />
        {featuredImage && (
          <div className="mb-8">
            <ImageFixed {...featuredImage} />
          </div>
        )}
        {children && <div className="mb-4 prose">{children}</div>}
        {showAvailabilityTool && (
          <div className="mb-4">
            <DIVIDER />
            <PostalCodeCheckForm />
          </div>
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
    if (!title) return null
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
    if (!(headings && Array.isArray(headings) && headings.length > 0))
      return null
    return (
      <div className="flex flex-col mb-8 space-y-6">
        {(headings as string[]).map((headingString: string) => (
          <h2 className="text-xl text-left" key={headingString}>
            {/*Up to one <a> or <Link> is supported in {headingString}*/}
            {addLinkToTextIfPresent(headingString)}
          </h2>
        ))}
      </div>
    )
  }

  function HoverBulletNavMenuAndGetConnectedButton() {
    if (!(hoverBulletNavMenu || showGetConnectedButton)) return null
    return (
      <div className="max-w-xl mx-auto">
        <DIVIDER />
        {hoverBulletNavMenu && (
          <>
            <div className="pb-4 text-2xl font-semibold tracking-tight color">
              Please{" "}
              <Link href="/contact" className="text-black">
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
}
