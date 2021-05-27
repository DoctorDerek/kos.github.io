export default function PricingPackagesSectionFootnotes({
  pricingPackagesSectionFootnotes,
}: {
  pricingPackagesSectionFootnotes: PricingPackagesSectionFootnote[]
}): JSX.Element {
  return (
    <ol>
      {pricingPackagesSectionFootnotes.map(
        (pricingPackagesSectionFootnote: PricingPackagesSectionFootnote) => {
          const { id, description } = pricingPackagesSectionFootnote
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
