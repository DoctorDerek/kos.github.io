import HoverBox from "@/components/HoverBox"
import PricingPackageColumnFootnotesAsLinks from "@/components/PricingPackageColumnFootnotesAsLinks"

export default function PricingPackageColumnPromotionHoverBox({
  promotionHeading,
  promotionSubheading,
  promotionPricePerMonth,
  promotionFootnotes,
}: {
  promotionHeading: string
  promotionSubheading: string
  promotionPricePerMonth: string
  promotionFootnotes: string
}) {
  function PricingPackageColumnPromotionHoverBoxJSX() {
    return (
      <HoverBox>
        <PricingPackageColumnPromotionHeading />
        <span className="text-sm font-bold leading-3 text-teal-brand">
          <PricingPackageColumnPromotionSubheading />
          <PricingPackageColumnPromotionPrice />
          <PricingPackageColumnFootnotesAsLinks
            color="black"
            footnotes={promotionFootnotes}
          />
        </span>
      </HoverBox>
    )
  }
  function PricingPackageColumnPromotionHeading() {
    return (
      <span className="font-extrabold text-red-brand">{promotionHeading}</span>
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
        <span className="text-3xl">${promotionPricePerMonth}</span> per month{" "}
      </>
    )
  }
  return <PricingPackageColumnPromotionHoverBoxJSX />
}
