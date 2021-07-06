import { Fragment, useState } from "react"

import OrderNowButton from "@/components/OrderNowButton"
import PricingPackageColumnFootnotesAsLinks from "@/components/PricingPackageColumnFootnotesAsLinks"
import PricingPackagePromotionHoverBox from "@/components/PricingPackageColumnPromotionHoverBox"
import PricingPackageModal from "@/components/PricingPackageModal"
import {
  classNames,
  extractDollarsCentsAndFootnotesFromPrice,
  formatFootnotesAsSuperscriptIfPresent,
} from "@/lib/utils"

export default function PricingPackageColumn({
  color = "navy",
  pricingPackage,
  columnNumber,
}: {
  color?: "navy" | "teal"
  pricingPackage: PricingPackage
  columnNumber: number
}) {
  const [openModal, setOpenModal] = useState(false) // track modal open/close

  let {
    packageName,
    packagePrices,
    packageHeadings,
    packageDescription,
    promotionHeading,
    promotionSubheading,
    promotionPrice,
    modalBullets,
    modalFootnotes,
  }: PricingPackage = pricingPackage // extract pricingPackage details
  if (!(packageName && packagePrices)) {
    throw new Error(
      "Both packageName and packagePrices are required in <PricingPackageColumn />"
    )
  }
  if (!(modalBullets || modalFootnotes)) {
    throw new Error(
      'At least one of modalBullets and/or modalFootnotes is required in the "click here for more details" pop-up modal in <PricingPackageColumn />'
    )
  }
  if (packageHeadings === undefined) {
    throw new Error(
      'packageHeadings is required in <PricingPackageColumn>. For no headings, please use the empty string "" using packageHeadings: "" in the Markdown file.'
    )
  }

  // support string | string[] for convenience by wrapping strings with an array
  if (!Array.isArray(packagePrices)) {
    packagePrices = packagePrices === undefined ? [] : [packagePrices]
  }
  if (!Array.isArray(packageHeadings)) {
    packageHeadings = packageHeadings === undefined ? [] : [packageHeadings]
  }
  if (!Array.isArray(modalBullets)) {
    modalBullets = modalBullets === undefined ? [] : [modalBullets]
  }
  if (!Array.isArray(modalFootnotes)) {
    modalFootnotes = modalFootnotes === undefined ? [] : [modalFootnotes]
  }

  function PricingPackageColumnJSX() {
    return (
      <div
        className={classNames(
          color === "teal"
            ? "hover:text-teal-brand hover:border-teal-brand"
            : "hover:text-blue-brand hover:border-blue-brand ",
          "relative flex flex-col h-full m-3 transition duration-500 shadow-2xl w-96 border-t-4 border-transparent border-solid text-white pb-6"
        )}
      >
        <div className="absolute z-10 text-6xl font-bold left-3 top-2">
          {columnNumber}
        </div>
        <div className="flex flex-col items-center justify-center h-48 bg-[#e8eff2]">
          <div
            className={classNames(
              color === "teal" ? "bg-teal-brand" : "bg-blue-brand",
              "border-[#e8eff2] absolute flex flex-col justify-center border-solid rounded-full shadow-xl top-8 w-92 h-92 border-20"
            )}
          >
            <div
              className={classNames(
                color === "teal"
                  ? "bg-teal-brand border-teal-dark"
                  : "bg-blue-brand border-blue-dark",
                packagePrices.length >= 2 ? "space-y-1 pt-6" : "space-y-6",
                "z-10 flex flex-col justify-center flex-shrink-0 mx-auto text-center border-solid rounded-full top-4 w-84 h-84 border-20"
              )}
            >
              <PricingPackageNameH2 />
              {(packagePrices as string[]).map((packagePrice) => (
                <Fragment key={packagePrice}>
                  <PricingPackagePrice packagePrice={packagePrice} />
                </Fragment>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col px-2 mx-2 space-y-5 text-center mt-58">
          <PricingPackageHeadings />
          <PricingPackageNameH3 />
          {packageDescription && <PricingPackageDescription />}
          <PricingPackageModalWithButton />
          {promotionHeading && promotionSubheading && promotionPrice && (
            <PricingPackagePromotionHoverBox
              {...{
                promotionHeading,
                promotionSubheading,
                promotionPrice,
              }}
            />
          )}
          <OrderNowButton color="blue" />
        </div>
      </div>
    )
  }

  function PricingPackageNameH2() {
    return <span className="text-5xl font-bold text-white">{packageName}</span>
  }

  function PricingPackagePrice({ packagePrice }: { packagePrice: string }) {
    const [, dollars, cents, footnotes, duration] =
      extractDollarsCentsAndFootnotesFromPrice(packagePrice)
    return (
      <div className="text-white">
        {dollars && (
          <div>
            <span className="text-5xl font-bold">${dollars}</span>
            {cents && <sup className="text-xl">.{cents}</sup>}
          </div>
        )}
        <div className="text-xl">
          {duration}
          {footnotes && (
            <>
              {" "}
              <PricingPackageColumnFootnotesAsLinks
                color="white"
                footnotes={footnotes}
              />
            </>
          )}
        </div>
      </div>
    )
  }

  function PricingPackageNameH3() {
    return <h3 className="text-2xl text-gray-700">{packageName}</h3>
  }

  function PricingPackageHeadings() {
    return (
      <>
        {(packageHeadings as string[]).map((packageHeading: string) => (
          <span
            className="text-3xl leading-8 text-blue-brand"
            key={packageHeading}
          >
            {
              // wrap any footnotes in the format ^1,2 that are found in
              // { packageHeading } inside a <sup> superscript tag
              formatFootnotesAsSuperscriptIfPresent(packageHeading)
            }
          </span>
        ))}
      </>
    )
  }

  function PricingPackageDescription() {
    return <p className="text-xl text-black">{packageDescription}</p>
  }

  function PricingPackageModalWithButton() {
    return (
      <>
        <button
          className="text-sm font-bold text-teal-brand"
          onClick={() => setOpenModal((state) => !state)}
        >
          »{" "}
          <span className="text-lg border-b-2 border-current border-solid">
            click here for full details
          </span>
        </button>
        <PricingPackageModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          packageName={packageName}
          modalBullets={modalBullets as string[]}
          modalFootnotes={modalFootnotes as string[]}
        />
      </>
    )
  }

  return <PricingPackageColumnJSX />
}
