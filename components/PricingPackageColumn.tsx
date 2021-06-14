import { useState } from "react"
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
}): JSX.Element {
  const [openModal, setOpenModal] = useState(false) // track modal open/close

  const {
    packageName,
    pricePerMonth,
    packageDescription,
    packageHeadings,
    promotionHeading,
    promotionSubheading,
    promotionPricePerMonth,
    promotionFootnotes,
  }: PricingPackage = pricingPackage // extract pricingPackage details

  const extractDollarsCentsAndFootnotes = (price: string) => {
    const priceMatchArray = /\$(\d+).(\d+)\^?([\d,]+)?/.exec(price)
    if (priceMatchArray) {
      return Array.from(priceMatchArray)
    }
    return [undefined, undefined, undefined, undefined] // will throw error
  }
  const pricePerMonthArray = extractDollarsCentsAndFootnotes(pricePerMonth)
  const [
    verifyPricePerMonth,
    pricePerMonthDollars,
    pricePerMonthCents,
    pricePerMonthFootnotes,
  ] = pricePerMonthArray
  if (verifyPricePerMonth !== pricePerMonth) {
    throw new Error(
      'pricePerMonth does not match the specified format in PricingPackageColumn; the correct format is "$39.95^1,2" where the footnotes are optional'
    )
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
                "z-10 flex flex-col justify-center flex-shrink-0 mx-auto text-center border-solid rounded-full top-4 w-84 h-84 border-20"
              )}
            >
              <PricingPackageNameH2 />
              {pricePerMonth && <PricingPackagePrice />}
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
    return <h2 className="text-5xl font-bold text-white">{packageName}</h2>
  }

  function PricingPackagePrice() {
    return (
      <>
        <span className="mt-6 text-white">
          <span className="text-5xl font-bold">${pricePerMonthDollars}</span>
          <sup className="text-xl">.{pricePerMonthCents}</sup>
        </span>

        <span className="mt-0 text-xl text-white">
          per month{" "}
          {pricePerMonthFootnotes && (
            <PricingPackageColumnFootnotesAsLinks
              color="white"
              footnotes={pricePerMonthFootnotes}
            />
          )}
        </span>
      </>
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
