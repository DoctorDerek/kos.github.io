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
  const [openModal, setOpenModal] = useState(false)
  function PricingPackageName() {
    return <span className="text-5xl font-bold">{pricingPackage.name}</span>
  }

  function PricingPackagePrice() {
    return (
      <span className="mt-6">
        <span className="text-5xl font-bold">${pricingPackage.price}</span>
        <sup className="text-xl">.95</sup>
      </span>
    )
  }
  function PricingPackagePriceFootnotes({
    footnotes = [1, 2],
  }: {
    footnotes?: number[]
  }) {
    return (
      <span className="mt-0 text-xl">
        per month{" "}
        <sup>
          <ol className="inline">
            {footnotes.map((footnote, index) => (
              <li key={footnote} className="inline">
                <a href={`#${footnote}`} className="text-white underline">
                  {footnote}
                </a>
                {index === footnotes.length - 1 ? "" : " "}
                {/* join footnotes with " " between items, except last item */}
              </li>
            ))}
          </ol>
        </sup>
      </span>
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
              "z-10 flex flex-col justify-center flex-shrink-0 mx-auto text-center text-white border-solid rounded-full top-4 w-84 h-84 border-20"
            )}
          >
            <PricingPackageName />
            <PricingPackagePrice />
            <PricingPackagePriceFootnotes />
          </div>
        </div>
      </div>
      <div className="flex flex-col px-10 mx-2 mt-56 space-y-6 text-center">
        <span className="text-2xl leading-6 text-blue-brand">
          UP TO {pricingPackage.downloadSpeed}
          <br />
          DOWNLOAD SPEED
        </span>
        <span className="text-2xl leading-6 text-blue-brand">
          {pricingPackage.dataTransfer} OF DATA <br />
          TRANSFER PER MONTH
        </span>
        <h6 className="text-base text-gray-700">{pricingPackage.name}</h6>
        <p className="text-black">{pricingPackage.description}</p>
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
        <HoverBox>
          <span className="text-[#901D3D] font-extrabold">
            MAKE IT UNLIMITED
          </span>
          <span className="text-sm font-bold leading-3 text-teal-brand">
            Add Unlimited Data for only
            <br />
            <span className="text-3xl">$10.00</span> per month{" "}
            <sup>
              <a href="#2" className="text-black underline">
                2
              </a>
            </sup>
          </span>
        </HoverBox>
        <OrderNowButton color="blue" />
      </div>
    </div>
  )
}
