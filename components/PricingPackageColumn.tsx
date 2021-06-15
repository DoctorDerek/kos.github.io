import { useState, Fragment } from "react"
import PricingPackageModal from "@/components/PricingPackageModal"
import OrderNowButton from "@/components/OrderNowButton"
import PricingPackagePromotionHoverBox from "@/components/PricingPackageColumnPromotionHoverBox"
import { classNames } from "@/lib/utils"
import PricingPackageColumnFootnotesAsLinks from "@/components/PricingPackageColumnFootnotesAsLinks"

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

  const {
    packageName,
    packagePrices,
    packageDescription,
    packageHeadings,
    promotionHeading,
    promotionSubheading,
    promotionPricePerMonth,
    promotionFootnotes,
  }: PricingPackage = pricingPackage // extract pricingPackage details
  if (!packageName && !packagePrices) {
    throw new Error(
      "Both packageName and packagePrices are required in <PricingPackageColumn />"
    )
  }

  const extractDollarsCentsAndFootnotes = (price: string) => {
    const priceMatchArray = /\$(\d+)\.?(\d+)?\^?([\d,]+)?(.+)?/.exec(price)
    if (priceMatchArray) {
      // [, dollars, cents, footnotes, duration]
      return Array.from(priceMatchArray)
    }
    return [price, undefined, undefined, undefined, price] // "No setup fee"
    /*
    throw new Error(
      `${price} does not match the specified format in <PricingPackageColumn />. The correct format is "$dollars.cents^footnotes duration" e.g. "$39.95^1,2 per month" where the comma-separated "footnotes" are optional and everything after the price is used as the "duration" appearing on the second line`
    )*/
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
              {packagePrices.map((priceString) => (
                <Fragment key={priceString}>
                  <PricingPackagePrice priceString={priceString} />
                </Fragment>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col px-10 mx-2 mt-56 space-y-6 text-center">
          <>
            {packageHeadings &&
              packageHeadings.map((packageHeading: string) => (
                <span
                  className="text-2xl leading-6 text-blue-brand"
                  key={packageHeading}
                >
                  {packageHeading}
                </span>
              ))}
          </>
          <PricingPackageNameH3 />
          <PricingPackageDescription />
          <PricingPackageModalWithButton />
          {promotionHeading && (
            <PricingPackagePromotionHoverBox
              {...{
                promotionHeading,
                promotionSubheading,
                promotionPricePerMonth,
                promotionFootnotes,
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

  function PricingPackagePrice({ priceString }: { priceString: string }) {
    const [, dollars, cents, footnotes, duration] =
      extractDollarsCentsAndFootnotes(priceString)
    return (
      <div>
        {dollars && (
          <div className="text-white">
            <span className="text-5xl font-bold">${dollars}</span>
            {cents && <sup className="text-xl">.{cents}</sup>}
          </div>
        )}
        <div className="text-xl text-white">
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
    return <h3 className="text-base text-gray-700">{packageName}</h3>
  }
  function PricingPackageDescription() {
    return <p className="text-black">{packageDescription}</p>
  }
  function PricingPackageModalWithButton() {
    return (
      <>
        <button
          className="text-sm font-bold text-teal-brand"
          onClick={() => setOpenModal((state) => !state)}
        >
          »{" "}
          <span className="border-b-2 border-current border-solid">
            click here for full details
          </span>
        </button>
        <PricingPackageModal
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      </>
    )
  }
  return <PricingPackageColumnJSX />
}
