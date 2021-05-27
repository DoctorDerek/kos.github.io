import HoverBox from "@/components/HoverBox"
import PricingPackageColumnFootnotesAsLinks from "@/components/PricingPackageColumnFootnotesAsLinks"

export default function PricingPackageColumnPromotionHoverBox() {
  const pricingPackageColumnPromotion: {
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
  } = pricingPackageColumnPromotion
  function PricingPackageColumnPromotionHeading() {
    return (
      <span className="text-[#901D3D] font-extrabold">{promotionHeading}</span>
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
        <span className="text-3xl">
          ${promotionPricePerMonth}.{promotionPricePerMonthCents}
        </span>{" "}
        per month{" "}
      </>
    )
  }
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
