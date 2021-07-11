import { addLinkToTextIfPresent } from "@/lib/utils"

export default function PricingPackagesSectionFootnotes({
  pricingPackagesSectionFootnotes,
}: {
  pricingPackagesSectionFootnotes?: PricingPackagesSectionFootnote[]
}) {
  if (
    !(
      pricingPackagesSectionFootnotes &&
      Array.isArray(pricingPackagesSectionFootnotes) &&
      pricingPackagesSectionFootnotes.length > 0
    )
  )
    return null
  return (
    <ol className="space-y-4">
      {/* <ul> would be equivalent here as the numbers are not shown */}
      {pricingPackagesSectionFootnotes.map(
        (pricingPackagesSectionFootnote: PricingPackagesSectionFootnote) => {
          const { footnoteLabel, description } = pricingPackagesSectionFootnote
          return (
            <li id={footnoteLabel} key={footnoteLabel + description}>
              {footnoteLabel.includes("*")
                ? footnoteLabel
                : `${footnoteLabel}) `}
              {addLinkToTextIfPresent(description)}
            </li>
          )
        }
      )}
    </ol>
  )
}
