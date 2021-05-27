export default function PricingPackagesSectionFootnotes({
  pricingSectionFootnotes,
}: {
  pricingSectionFootnotes: PricingSectionFootnote[]
}): JSX.Element {
  return (
    <ol>
      {pricingSectionFootnotes.map(
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
