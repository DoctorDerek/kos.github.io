import { useState } from "react"
import PricingPackageModal from "@/components/PricingPackageModal"
import OrderNowButton from "@/components/OrderNowButton"
import { HoverBox } from "@/components/HoverBox"
import { classNames } from "@/lib/utils"

export function PricingPackageColumn({
  color = "navy",
  pricingPackage,
  number,
}: {
  color?: "navy" | "teal"
  pricingPackage: PricingPackage
  number: number
}): JSX.Element {
  const {
    name,
    pricePerMonthDollars,
    pricePerMonthCents,
    downloadSpeed,
    dataTransfer,
    description,
    priceFootnotes,
  }: PricingPackage = pricingPackage

  const [openModal, setOpenModal] = useState(false)

  function PricingPackageNameH2() {
    return <h2 className="text-5xl font-bold text-white">{name}</h2>
  }

  function PricingPackagePrice() {
    return (
      <>
        <span className="mt-6 text-white">
          <span className="text-5xl font-bold">${pricePerMonthDollars}</span>
          <sup className="text-xl">.${pricePerMonthCents}</sup>
        </span>

        <span className="mt-0 text-xl text-white">
          per month <PricingPackagePriceFootnotes />
        </span>
      </>
    )
  }
  function PricingPackagePriceFootnotes() {
    return <PricingPackageFootnotes color="white" footnotes={priceFootnotes} />
  }
  /**
   * @param footnotes
   * a string of unique footnotes that will be split on white space e.g. "1 2" will be split to [1,2]
   */
  function PricingPackageFootnotes({
    footnotes,
    color,
  }: {
    footnotes: string
    color: "white" | "black"
  }) {
    // split footnotes string on whitespace so that "1 2" becomes [1,2]
    const footnotesArray = footnotes.split(/\W/)
    if (Array.from(new Set(footnotesArray)).length !== footnotesArray.length)
      throw new Error(
        `Duplicate footnotes string "${footnotes}" found in <PricingPackageFootnotes /> e.g. "2 2" instead of "2" or "1 2"`
      )
    return (
      <sup>
        <ol className="inline">
          {footnotesArray.map((footnote, index) => (
            <li key={footnote} className="inline">
              <a
                href={`#${footnote}`}
                className={classNames(
                  color === "white" ? "text-white" : "text-black",
                  "underline"
                )}
              >
                {footnote}
              </a>
              {index === footnotes.length - 1 ? "" : " "}
              {/* join footnotes with " " between items, except last item */}
            </li>
          ))}
        </ol>
      </sup>
    )
  }

  function PricingPackageDownloadSpeed() {
    return (
      <span className="text-2xl leading-6 text-blue-brand">
        UP TO {downloadSpeed}
        <br />
        DOWNLOAD SPEED
      </span>
    )
  }
  function PricingPackageDataTransfer() {
    return (
      <span className="text-2xl leading-6 text-blue-brand">
        {dataTransfer} OF DATA <br />
        TRANSFER PER MONTH
      </span>
    )
  }
  function PricingPackageNameH3() {
    return <h3 className="text-base text-gray-700">{name}</h3>
  }
  function PricingPackageDescription() {
    return <p className="text-black">{description}</p>
  }
  function PricingPackageModalWithButton() {
    return (
      <>
        <button
          className="text-sm font-bold text-teal-brand text-underline"
          onClick={() => setOpenModal((state) => !state)}
        >
          » click here for full details
        </button>
        <PricingPackageModal
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      </>
    )
  }
  function PricingPackagePromotionHoverBox() {
    const pricingPackagePromotion: {
      promotionHeading: string
      promotionSubheading: string
      promotionPricePerMonth: string
      promotionPricePerMonthCents: string
      promotionFootnotes: string
    } = {
      promotionHeading: "Make It Unlimited",
      promotionSubheading: "Add Unlimited Data for only",
      promotionPricePerMonth: "10",
      promotionPricePerMonthCents: "00",
      promotionFootnotes: "2",
    }
    const {
      promotionHeading,
      promotionSubheading,
      promotionPricePerMonth,
      promotionPricePerMonthCents,
      promotionFootnotes,
    } = pricingPackagePromotion
    function PricingPackagePromotionHeading() {
      return (
        <span className="text-[#901D3D] font-extrabold">
          {promotionHeading}
        </span>
      )
    }
    function PricingPackagePromotionSubheading() {
      return (
        <>
          {promotionSubheading}
          <br />
        </>
      )
    }
    function PricingPackagePromotionPrice() {
      return (
        <>
          <span className="text-3xl">
            ${promotionPricePerMonth}.{promotionPricePerMonthCents}
          </span>{" "}
          per month{" "}
        </>
      )
    }
    function PricingPackagePromotionFootnotes() {
      return (
        <PricingPackageFootnotes color="black" footnotes={promotionFootnotes} />
      )
    }
    return (
      <HoverBox>
        <PricingPackagePromotionHeading />
        <span className="text-sm font-bold leading-3 text-teal-brand">
          <PricingPackagePromotionSubheading />
          <PricingPackagePromotionPrice />
          <PricingPackagePromotionFootnotes />
        </span>
      </HoverBox>
    )
  }

  return (
    <div
      className={classNames(
        color === "teal"
          ? "hover:text-teal-brand hover:border-teal-brand"
          : "hover:text-blue-brand hover:border-blue-brand ",
        "relative flex flex-col h-full m-3 transition duration-500 shadow-2xl w-96 border-t-4 border-transparent border-solid text-white pb-6"
      )}
    >
      <div className="absolute z-20 text-6xl font-bold left-3 top-2">
        {number}
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
            <PricingPackagePrice />
          </div>
        </div>
      </div>
      <div className="flex flex-col px-10 mx-2 mt-56 space-y-6 text-center">
        <PricingPackageDownloadSpeed />
        <PricingPackageDataTransfer />
        <PricingPackageNameH3 />
        <PricingPackageDescription />
        <PricingPackageModalWithButton />
        <PricingPackagePromotionHoverBox />
        <OrderNowButton color="blue" />
      </div>
    </div>
  )
}
