export default function PricingPackagesSectionFootnotes({
  pricingPackageSectionFootnotes,
}: {
  pricingPackageSectionFootnotes: PricingSectionFootnote[]
}): JSX.Element {
  return (
    <ol>
      {pricingPackageSectionFootnotes.map(
        (pricingSectionFootnote: PricingSectionFootnote) => {
          const { id, description } = pricingSectionFootnote
          return (
            <li id={id} key={id + description}>
              {id}) {description}
            </li>
          )
        }
      )}
    </ol>
  )
}
