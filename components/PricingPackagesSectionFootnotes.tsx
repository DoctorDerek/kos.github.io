import { addLinkToTextIfPresent } from "@/lib/utils"

export default function PricingPackagesSectionFootnotes({
  pricingPackagesSectionFootnotes,
}: {
  pricingPackagesSectionFootnotes: PricingPackagesSectionFootnote[]
}): JSX.Element {
  return (
    <ol>
      {pricingPackagesSectionFootnotes.map(
        (pricingPackagesSectionFootnote: PricingPackagesSectionFootnote) => {
          const { footnoteLabel, description } = pricingPackagesSectionFootnote
          return (
            <li id={footnoteLabel} key={footnoteLabel + description}>
              {footnoteLabel}) {addLinkToTextIfPresent(description)}
            </li>
          )
        }
      )}
    </ol>
  )
}
