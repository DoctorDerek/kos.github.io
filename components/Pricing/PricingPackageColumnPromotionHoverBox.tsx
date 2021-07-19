import HoverBox from "@/components/Hover/HoverBox"
import PricingPackageColumnFootnotesAsLinks from "@/components/Pricing/PricingPackageColumnFootnotesAsLinks"
import { extractDollarsCentsAndFootnotesFromPrice } from "@/lib/utils"

export default function PricingPackageColumnPromotionHoverBox({
  promotionHeading,
  promotionSubheading,
  promotionPrice,
}: {
  promotionHeading: string
  promotionSubheading: string
  promotionPrice: string
}) {
  const [
    ,
    promotionDollars,
    promotionCents,
    promotionFootnotes,
    promotionDuration,
  ] = extractDollarsCentsAndFootnotesFromPrice(promotionPrice)

  function PricingPackageColumnPromotionHoverBoxJSX() {
    return (
      <HoverBox>
        <PricingPackageColumnPromotionHeading />
        <span className="text-base font-bold text-teal-brand">
          <PricingPackageColumnPromotionSubheading />
          <PricingPackageColumnPromotionPrice />
          {promotionFootnotes && (
            <PricingPackageColumnFootnotesAsLinks
              color="black"
              footnotes={promotionFootnotes}
            />
          )}
        </span>
      </HoverBox>
    )
  }
  function PricingPackageColumnPromotionHeading() {
    return (
      <span className="text-lg font-extrabold text-red-brand">
        {promotionHeading}
      </span>
    )
  }
  function PricingPackageColumnPromotionSubheading() {
    return (
      <>
        {promotionSubheading}
        <br />
      </>
    )
  }
  function PricingPackageColumnPromotionPrice() {
    return (
      <>
        {promotionDollars && (
          <span className="text-3xl">
            ${promotionDollars}
            {promotionCents && <>.{promotionCents}</>}
          </span>
        )}
        {promotionDuration}{" "}
      </>
    )
  }
  return <PricingPackageColumnPromotionHoverBoxJSX />
}
