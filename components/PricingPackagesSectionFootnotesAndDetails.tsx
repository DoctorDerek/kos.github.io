import { Fragment } from "react"

import PricingPackagesSectionDetailsSection from "@/components/PricingPackagesSectionDetails"
import PricingPackagesSectionDetailsPromotion from "@/components/PricingPackagesSectionDetailsPromotion"
import PricingPackagesSectionFootnotes from "@/components/PricingPackagesSectionFootnotes"

export default function PricingPackagesSectionFootnotesAndDetails({
  pricingPackagesSectionFootnotes,
  pricingPackagesSectionDetails,
  pricingPackagesSectionDetailsPromotion,
}: {
  pricingPackagesSectionFootnotes?: PricingPackagesSectionFootnote[]
  pricingPackagesSectionDetails?: PricingPackagesSectionDetail[]
  pricingPackagesSectionDetailsPromotion?: string
}) {
  if (
    !(
      pricingPackagesSectionFootnotes ||
      (Array.isArray(pricingPackagesSectionDetails) &&
        pricingPackagesSectionDetails.length > 0)
    )
  ) {
    return null
  }

  return (
    <div className="py-6">
      {pricingPackagesSectionFootnotes && (
        <div className="pt-12 text-center">
          <PricingPackagesSectionFootnotes
            pricingPackagesSectionFootnotes={pricingPackagesSectionFootnotes}
          />
        </div>
      )}
      {Array.isArray(pricingPackagesSectionDetails) &&
        pricingPackagesSectionDetails.length > 0 && (
          <>
            <div className="py-12 text-3xl font-bold text-center text-blue-brand">
              Additional Details & Options
            </div>
            <PricingPackagesSectionDetailsPromotion
              pricingPackagesSectionDetailsPromotion={
                pricingPackagesSectionDetailsPromotion
              }
            />
            <PricingPackagesSectionDetailsSection
              pricingPackagesSectionDetails={pricingPackagesSectionDetails}
            />
          </>
        )}
    </div>
  )
}
