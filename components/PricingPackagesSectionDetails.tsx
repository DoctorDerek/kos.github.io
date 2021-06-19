import { Fragment } from "react"
import { classNames, addLinkToTextIfPresent } from "@/lib/utils"
import HoverBox from "@/components/HoverBox"

export default function PricingPackagesSectionDetails({
  pricingPackagesSectionDetails,
}: {
  pricingPackagesSectionDetails: PricingPackagesSectionDetail[]
}) {
  return (
    <div className="flex flex-wrap justify-center">
      {pricingPackagesSectionDetails.map(
        (pricingPackagesSectionDetail, index) => (
          <Fragment key={pricingPackagesSectionDetail.detailsSectionHeading1}>
            {
              /*the <HoverBox> items are flex items; others are full-width*/
              !pricingPackagesSectionDetail.useSmallHoverBox && (
                <div className="w-full h-0">
                  {/*flex break before full-width (useSmallHoverBox===false)*/}
                </div>
              )
            }
            <PricingPackagesSectionDetailsSectionIndividual
              pricingPackagesSectionDetail={pricingPackagesSectionDetail}
              backgroundColor={index % 2 === 1 ? "transparent" : "gray"}
            />
          </Fragment>
        )
      )}
    </div>
  )
}

/**
 * This component takes displays the PricingPackagesSectionDetails types either
 * wrapped with a <HoverBox> or displayed as a separate full-width section.
 *
 * @param useSmallHoverBox (a field on the PricingPackagesSectionDetail type)
 * If true, the merged PricingPackagesSectionDetails types will be displayed as a flex
 * <HoverBox>; if false then the result will be a separate block <div>.
 */
function PricingPackagesSectionDetailsSectionIndividual({
  pricingPackagesSectionDetail,
  backgroundColor,
}: {
  pricingPackagesSectionDetail: PricingPackagesSectionDetail
  backgroundColor: "gray" | "transparent"
}) {
  const {
    detailsSectionHeading1,
    detailsSectionDescription1,
    detailsSectionList1,
    detailsSectionHeading2,
    detailsSectionDescription2,
    detailsSectionList2,
    useSmallHoverBox,
  } = pricingPackagesSectionDetail

  function PricingPackagesSectionDetailsSectionIndividualOuterJSX() {
    return (
      <HoverBox
        className={classNames(
          useSmallHoverBox ? "text-center w-96" : "text-left max-w-3xl",
          useSmallHoverBox && backgroundColor === "gray"
            ? "bg-gray-100"
            : "bg-transparent"
        )}
      >
        <PricingPackagesSectionDetailsSectionIndividualInnerJSX />
      </HoverBox>
    )
  }
  function PricingPackagesSectionDetailsSectionIndividualInnerJSX() {
    return (
      <>
        <DetailsSectionHeading detailsSectionHeading={detailsSectionHeading1} />
        <DetailsSectionDescription
          detailsSectionDescription={detailsSectionDescription1}
        />
        <DetailsSectionList detailsSectionList={detailsSectionList1} />
        <DetailsSectionHeading detailsSectionHeading={detailsSectionHeading2} />
        <DetailsSectionDescription
          detailsSectionDescription={detailsSectionDescription2}
        />
        <DetailsSectionList detailsSectionList={detailsSectionList2} />
      </>
    )
  }

  function DetailsSectionHeading({
    detailsSectionHeading,
  }: {
    detailsSectionHeading?: string
  }) {
    if (!detailsSectionHeading) return null
    return (
      <div className="ml-2 font-bold text-blue-brand">
        {detailsSectionHeading}
      </div>
    )
  }

  function DetailsSectionDescription({
    detailsSectionDescription,
  }: {
    detailsSectionDescription?: string | string[]
  }) {
    if (!detailsSectionDescription) return null
    if (!Array.isArray(detailsSectionDescription)) {
      detailsSectionDescription = [detailsSectionDescription]
      // support an arbitrary number of paragraphs in each description section
    }
    return (
      <>
        {detailsSectionDescription.map((detailsSectionDescriptionParagraph) => (
          <p
            className="px-2"
            key={detailsSectionDescriptionParagraph.slice(0, 10)}
          >
            {addLinkToTextIfPresent(detailsSectionDescriptionParagraph)}
          </p>
        ))}
      </>
    )
  }

  function DetailsSectionList({
    detailsSectionList,
  }: {
    detailsSectionList?: string[]
  }) {
    if (!detailsSectionList) return null
    return (
      <ul className="mb-4 ml-8 mr-2 list-disc">
        {detailsSectionList.map((detailsSectionListItem) => (
          <li key={detailsSectionListItem}>{detailsSectionListItem}</li>
        ))}
      </ul>
    )
  }

  return <PricingPackagesSectionDetailsSectionIndividualOuterJSX />
}
