import PricingPackageColumn from "@/components/PricingPackageColumn"
import PostalCodeCheckForm from "@/components/PostalCodeCheckForm"
import { Fragment } from "react"
import { classNames } from "@/lib/utils"
import HoverBox from "@/components/HoverBox"
import Link from "@/components/Link"

export const pricingPackages = [
  {
    packageName: "CABLE 15",
    pricePerMonthDollars: "39",
    pricePerMonthCents: "95",
    downloadSpeed: "15.0 MBPS",
    dataTransfer: "200 GB",
    description:
      "Surf, shop, stream music and video, stay connected with family and friends.",
    priceFootnotes: "1 2",
  },
  {
    packageName: "CABLE 40",
    pricePerMonthDollars: "54",
    pricePerMonthCents: "95",
    downloadSpeed: "40.0 MBPS",
    dataTransfer: "300 GB",
    description:
      "For active families and multiple users. All the features with more speed and data.",
    priceFootnotes: "1 2",
  },
  {
    packageName: "CABLE 60",
    pricePerMonthDollars: "74",
    pricePerMonthCents: "95",
    downloadSpeed: "60.0 MBPS",
    dataTransfer: "300 GB",
    description:
      "For power users. Perfect for people who demand the most speed available.",
    priceFootnotes: "1 2",
  },
]

export function HeadingH2AndPostalCodeCheck({ heading }: { heading: string }) {
  return (
    <div className="flex flex-col space-y-6">
      <h2 className="text-xl text-left">{heading}</h2>
      <PostalCodeCheckForm />
    </div>
  )
}

export default function PricingSection({
  pricingPackages,
}: {
  pricingPackages: PricingPackage[]
}) {
  return (
    <>
      <div className="flex flex-wrap justify-center">
        {pricingPackages.map((pricingPackage, index) => (
          <>
            <PricingPackageColumn
              color={index % 2 === 1 ? "teal" : "navy"}
              pricingPackage={pricingPackage}
              key={pricingPackage.packageName}
              columnNumber={index + 1}
            />
            {index % 3 === 0 && index > 0 && (
              <div className="w-full h-0">{/*flex break every 3 items*/}</div>
            )}
          </>
        ))}
      </div>
    </>
  )
}
export function PricingSectionFootnotes({
  pricingSectionFootnotes,
}: {
  pricingSectionFootnotes: PricingSectionFootnote[]
}): JSX.Element {
  function PricingPackageFootnotes(): JSX.Element {
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
  /**
   * This component takes one or more PricingPackageDetails types and combines them into a single <PricingPackageDetailsSection /> either wrapped with a <HoverBox> or displayed as a separate section.
   *
   * @param wrapWithHoverBox
   * If true, the merged PricingPackageDetails types will be displayed as a flex <HoverBox>; if false then the result will be a separate block <div>.
   */
  function PricingPackageDetailsSection({
    pricingPackageDetails,
    wrapWithHoverBox = true,
    backgroundColor = "transparent",
  }: {
    pricingPackageDetails: PricingPackageDetails | PricingPackageDetailsItem
    wrapWithHoverBox: boolean
    backgroundColor?: "transparent" | "gray"
  }) {
    if (!Array.isArray(pricingPackageDetails)) {
      return (
        <PricingPackageDetailsSection
          pricingPackageDetails={[pricingPackageDetails]}
          wrapWithHoverBox={wrapWithHoverBox}
          backgroundColor={backgroundColor}
        />
      )
    }
    function PricingPackageDetailsSectionMerged({
      pricingPackageDetailsArray,
    }: {
      pricingPackageDetailsArray: PricingPackageDetailsItem[]
    }) {
      return (
        <>
          {pricingPackageDetailsArray.map(
            (
              pricingPackageDetailsSectionToCombine: PricingPackageDetailsItem
            ) => (
              <Fragment
                key={
                  pricingPackageDetailsSectionToCombine.detailsSectionHeading
                }
              >
                <PricingPackageDetailsSectionIndividual
                  pricingPackageDetailsItem={
                    pricingPackageDetailsSectionToCombine
                  }
                />
              </Fragment>
            )
          )}
        </>
      )
    }
    function PricingPackageDetailsSectionIndividual({
      pricingPackageDetailsItem,
    }: {
      pricingPackageDetailsItem: PricingPackageDetailsItem
    }) {
      const {
        detailsSectionHeading,
        detailsSectionDescription,
        detailsSectionList,
      } = pricingPackageDetailsItem
      return (
        <>
          <div
            className={classNames(
              wrapWithHoverBox ? "uppercase" : "",
              "font-bold text-center text-blue-brand"
            )}
          >
            {detailsSectionHeading}
          </div>
          {detailsSectionDescription && (
            <p className="px-2">{detailsSectionDescription}</p>
          )}
          {detailsSectionList.length > 0 && (
            <ul className="ml-8 mr-2 list-disc">
              {detailsSectionList.map((detailsSectionListItem) => (
                <li key={detailsSectionListItem}>{detailsSectionListItem}</li>
              ))}
            </ul>
          )}
        </>
      )
    }
    return (
      <>
        {wrapWithHoverBox ? (
          <div className="text-left w-96">
            <HoverBox
              className={classNames(
                backgroundColor === "gray" ? "bg-gray-100" : "bg-transparent"
              )}
            >
              <PricingPackageDetailsSectionMerged
                pricingPackageDetailsArray={
                  pricingPackageDetails as PricingPackageDetailsItem[]
                }
              />
            </HoverBox>
          </div>
        ) : (
          <div>
            <PricingPackageDetailsSectionMerged
              pricingPackageDetailsArray={
                pricingPackageDetails as PricingPackageDetailsItem[]
              }
            />
          </div>
        )}
      </>
    )
  }
  const ResidentialHighSpeedCableDetails: PricingPackageDetails = [
    {
      detailsSectionHeading: "Options",
      detailsSectionDescription: "",
      detailsSectionList: [
        "Additional E-Mail boxes",
        "$4.95 per month, each Optional",
        "VIP E-mail boxes, $6.95 per month, each",
        "Additional 1000MB (1GB) transfer available for $1.00",
        "Opt-out for automatic spam protection",
      ],
    },
    [
      {
        detailsSectionHeading: "Modem Options",
        detailsSectionDescription: "Automatic payment options are required.",
        detailsSectionList: [
          "Monthly Modem rental",
          "$5.00 Buy Modem $79.95 (Hitron CDA-RES)",
          "Call for payment plan options",
        ],
      },
      {
        detailsSectionHeading: "BRING YOUR OWN MODEM",
        detailsSectionDescription: (
          <>
            You are able to use your own Cable Modem if it is in our{" "}
            <Link href="/modem/list" className="underline text-blue-brand">
              supported modem list
            </Link>
            .
          </>
        ),
        detailsSectionList: [],
      },
    ],
    {
      detailsSectionHeading: "Requirements",
      detailsSectionDescription: "",
      detailsSectionList: [
        "To access the Internet with KOS CABLE, you will need:",
        "Supported Cable Modem Required (Rental Available)",
        "Modern 32-bit or 64-bit Operating System (Windows 7 minimum)",
        "Minimum of 2.0Ghz processor required",
        "56K modem suggested for dial-up",
      ],
    },
  ]
  return (
    <>
      <div className="pt-12 text-center">
        <PricingPackageFootnotes />
      </div>
      <div className="py-12 text-3xl font-bold text-center text-blue-brand">
        Additional Details & Options
      </div>
      <div className="flex flex-wrap justify-center">
        <PricingPackageDetailsSection
          pricingPackageDetails={ResidentialHighSpeedCableDetails[0]}
          wrapWithHoverBox={true}
          backgroundColor="gray"
        />
        <PricingPackageDetailsSection
          pricingPackageDetails={ResidentialHighSpeedCableDetails[1]}
          wrapWithHoverBox={true}
          backgroundColor="transparent"
        />
        <PricingPackageDetailsSection
          pricingPackageDetails={ResidentialHighSpeedCableDetails[2]}
          wrapWithHoverBox={true}
          backgroundColor="gray"
        />
      </div>
    </>
  )
}
