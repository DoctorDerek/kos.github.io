import { Fragment } from "react"

import PricingPackageColumnFootnotesAsLinks from "@/components/PricingPackageColumnFootnotesAsLinks"
import PricingPackagesSectionFootnotes from "@/components/PricingPackagesSectionFootnotes"
import {
  classNames,
  extractDollarsCentsAndFootnotesFromPrice,
} from "@/lib/utils"

export default function PricingPackagesBlueSection({
  pricingPackagesBlue,
  pricingPackagesBlueFootnotes,
}: {
  pricingPackagesBlue?: (PricingPackage & {
    useSmallBlueBox: boolean
  })[]
  pricingPackagesBlueFootnotes?: PricingPackagesSectionFootnote[]
}) {
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

      <PricingPackagesSectionFootnotes
        pricingPackagesSectionFootnotes={pricingPackagesBlueFootnotes}
      />
    </div>
  )
}
