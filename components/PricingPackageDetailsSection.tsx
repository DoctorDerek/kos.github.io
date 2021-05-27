import { Fragment } from "react"
import { classNames } from "@/lib/utils"
import HoverBox from "@/components/HoverBox"

export default function PricingPackageDetailsSection({
  pricingPackageDetails,
}: {
  pricingPackageDetails: PricingPackageDetail[]
}) {
  return (
    <div className="flex flex-wrap justify-center">
      {pricingPackageDetails.map((pricingPackageDetail, index) => (
        <Fragment key={pricingPackageDetail.detailsSectionHeading1}>
          <PricingPackageDetailsSectionIndividual
            pricingPackageDetail={pricingPackageDetail}
            backgroundColor={index % 2 === 1 ? "transparent" : "gray"}
          />
          {index % 3 === 0 && index > 0 && (
            <div className="w-full h-0">{/*flex break every 3 items*/}</div>
          )}
        </Fragment>
      ))}
    </div>
  )
}

/**
 * This component takes displays the PricingPackageDetails types either
 * wrapped with a <HoverBox> or displayed as a separate full-width section.
 *
 * @param wrapWithHoverBox (a field on the PricingPackageDetail type)
 * If true, the merged PricingPackageDetails types will be displayed as a flex
 * <HoverBox>; if false then the result will be a separate block <div>.
 */
function PricingPackageDetailsSectionIndividual({
  pricingPackageDetail,
  backgroundColor,
}: {
  pricingPackageDetail: PricingPackageDetail
  backgroundColor: "gray" | "transparent"
}) {
  const {
    detailsSectionHeading1,
    detailsSectionDescription1,
    detailsSectionList1,
    detailsSectionHeading2,
    detailsSectionDescription2,
    detailsSectionList2,
    wrapWithHoverBox,
  } = pricingPackageDetail

  function PricingPackageDetailsSectionIndividualOuterJSX() {
    return (
      <>
        {wrapWithHoverBox ? (
          <div className="text-left w-96">
            <HoverBox
              className={classNames(
                backgroundColor === "gray" ? "bg-gray-100" : "bg-transparent"
              )}
            >
              <PricingPackageDetailsSectionIndividualInnerJSX />
            </HoverBox>
          </div>
        ) : (
          <PricingPackageDetailsSectionIndividualInnerJSX />
        )}
      </>
    )
  }
  function PricingPackageDetailsSectionIndividualInnerJSX() {
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
      <div
        className={classNames(
          wrapWithHoverBox ? "uppercase" : "",
          "font-bold text-center text-blue-brand"
        )}
      >
        {detailsSectionHeading}
      </div>
    )
  }
  function DetailsSectionDescription({
    detailsSectionDescription,
  }: {
    detailsSectionDescription?: string | JSX.Element
  }) {
    if (!detailsSectionDescription) return null
    return <p className="px-2">{detailsSectionDescription}</p>
  }

  function DetailsSectionList({
    detailsSectionList,
  }: {
    detailsSectionList?: string[]
  }) {
    if (!detailsSectionList) return null
    return (
      <ul className="ml-8 mr-2 list-disc">
        {detailsSectionList.map((detailsSectionListItem) => (
          <li key={detailsSectionListItem}>{detailsSectionListItem}</li>
        ))}
      </ul>
    )
  }

  return <PricingPackageDetailsSectionIndividualOuterJSX />
}
