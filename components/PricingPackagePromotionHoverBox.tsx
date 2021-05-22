import { HoverBox } from "@/components/HoverBox"
import PricingPackageFootnotes from "@/components/PricingPackageFootnotes"

export default function PricingPackagePromotionHoverBox() {
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
      <span className="text-[#901D3D] font-extrabold">{promotionHeading}</span>
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
