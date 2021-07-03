import { extractDollarsCentsAndFootnotesFromPrice } from "@/lib/utils"
import HoverBox from "@/components/HoverBox"
import PricingPackageColumnFootnotesAsLinks from "@/components/PricingPackageColumnFootnotesAsLinks"

export default function PricingPackagesSectionDetailsPromotion({
  pricingPackagesSectionDetailsPromotion,
}: {
  pricingPackagesSectionDetailsPromotion?: string
}) {
  if (!pricingPackagesSectionDetailsPromotion) return null

  const [match, dollars, cents, footnotes, duration] =
    extractDollarsCentsAndFootnotesFromPrice(
      pricingPackagesSectionDetailsPromotion
    )

  let beforeMatch = ""
  if (match !== duration) {
    // we found a valid price match
    const beforeMatchArray = /(.*)\$(\d+)\.?(\d+)?\^?([\d,]+)?(.+)?/.exec(
      pricingPackagesSectionDetailsPromotion
    )
    // separate out the before subgroup i.e. beforeMatchArray[1], if any
    beforeMatch = beforeMatchArray ? beforeMatchArray[1] : ""
  }

  return (
    <>
      <div className="max-w-6xl mx-auto mb-12">
        <HoverBox>
          <div className="max-w-3xl px-4 mx-auto text-3xl font-bold text-center text-red-brand">
            {beforeMatch}
            <span className="text-black">
              {" "}
              {dollars && (
                <>
                  <span className="font-bold">${dollars}</span>
                  {cents && <sup className="text-lg">.{cents}</sup>}
                </>
              )}
              {duration}
              {footnotes && (
                <sup className="text-lg">
                  {" "}
                  <PricingPackageColumnFootnotesAsLinks
                    color="black"
                    footnotes={footnotes}
                  />
                </sup>
              )}
            </span>
          </div>
        </HoverBox>
      </div>
    </>
  )
}
