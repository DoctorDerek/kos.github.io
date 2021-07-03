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
    <ol>
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
