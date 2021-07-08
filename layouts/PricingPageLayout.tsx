import { Fragment } from "react"

import ContactForm from "@/components/ContactForm"
import Image from "@/components/CustomImage"
import HoverBulletNavMenuAndGetConnectedButton from "@/components/HoverBulletNavMenuAndGetConnectedButton"
import IconCard from "@/components/IconCard"
import IconColumnSection from "@/components/IconColumnSection"
import OurTeamSection from "@/components/OurTeamSection"
import PricingPackagesBlueSection from "@/components/PricingPackagesBlueSection"
import PricingPackagesSection from "@/components/PricingPackagesSection"
import PricingPackagesSectionFootnotesAndDetails from "@/components/PricingPackagesSectionFootnotesAndDetails"
import { PageSeo } from "@/components/SEO"
import TitleHeadingsAndChildren from "@/components/TitleHeadingsAndChildren"
import siteMetadata from "@/data/siteMetadata.json"
import { classNames } from "@/lib/utils"

export default function PricingPageLayout({
  slug,
  title,
  headings,
  fullWidth,
  showAvailabilityTool,
  featuredImage,
  hoverBulletNavMenu,
  showGetConnectedButton,
  pricingPackages,
  pricingPackagesSectionFootnotes,
  pricingPackagesSectionDetails,
  pricingPackagesSectionDetailsPromotion,
  pricingPackagesBlue,
  pricingPackagesBlueFootnotes,
  iconColumnSection,
  ourTeamSection,
  officeAddressLeft,
  officeAddressRight,
  contactForm,
  children,
}: PageFrontMatter) {
  if (!title) throw new Error("title is a required field in Markdown files")
  return (
    <>
      <PageSeo
        title={title.replace(/\*/g, "")}
        description=""
        url={`${siteMetadata.siteUrl}/${slug}`}
      />
      <div className="grid w-full xl:h-32 lg:h-28 md:h-24 sm:h-20 h-16 border-blue-brand border-solid border-t-[6px]">
        <Image src="/images/footer-bg.jpg" alt="" />
        {/* alt="" acceptable for purely decorative elements */}
      </div>
      <div className="py-8 mx-auto xl:py-16 lg:py-14 md:py-12 sm:py-10">
        <TitleHeadingsAndChildren
          {...{
            title,
            headings,
            fullWidth,
            showAvailabilityTool,
            featuredImage,
            children,
          }}
        />
        <PricingPackagesSection pricingPackages={pricingPackages} />
        <PricingPackagesSectionFootnotesAndDetails
          pricingPackagesSectionFootnotes={pricingPackagesSectionFootnotes}
          pricingPackagesSectionDetails={pricingPackagesSectionDetails}
          pricingPackagesSectionDetailsPromotion={
            pricingPackagesSectionDetailsPromotion
          }
        />
        <PricingPackagesBlueSection
          pricingPackagesBlue={pricingPackagesBlue}
          pricingPackagesBlueFootnotes={pricingPackagesBlueFootnotes}
        />
        <IconColumnSection iconColumnSection={iconColumnSection} />
        <OurTeamSection ourTeamSection={ourTeamSection} />
        <HoverBulletNavMenuAndGetConnectedButton
          hoverBulletNavMenu={hoverBulletNavMenu}
          showGetConnectedButton={showGetConnectedButton}
        />
        <ContactFormSection
          officeAddressLeft={officeAddressLeft}
          officeAddressRight={officeAddressRight}
          contactForm={contactForm}
        />
      </div>
    </>
  )
}

function ContactFormSection({
  officeAddressLeft,
  officeAddressRight,
  contactForm,
}: {
  officeAddressLeft?: IconCard[]
  officeAddressRight?: IconCard[]
  contactForm?: ContactField[]
}) {
  // the contact form is always required
  if (!contactForm) return null
  // if either is present, both left and right office addresses are required
  if (officeAddressLeft && !officeAddressRight) return null
  if (!officeAddressLeft && officeAddressRight) return null
  return (
    <div
      className={classNames(
        "grid max-w-5xl mx-auto",
        officeAddressLeft && officeAddressRight
          ? "grid-cols-1 md:space-x-4 md:grid-cols-3"
          : ""
        // 3 column layout is used for /contact and 1 column for /order
      )}
    >
      {officeAddressLeft && (
        <OfficeAddressColumn iconCards={officeAddressLeft} />
      )}
      {contactForm && <ContactForm contactForm={contactForm} />}
      {officeAddressRight && (
        <OfficeAddressColumn iconCards={officeAddressRight} />
      )}
    </div>
  )
}

function OfficeAddressColumn({ iconCards }: { iconCards: IconCard[] }) {
  return (
    <div className="w-80">
      {iconCards.map((iconCard: IconCard) => (
        <Fragment key={`${iconCard.text}${iconCard.label}`}>
          <IconCard {...iconCard} />
        </Fragment>
      ))}
    </div>
  )
}
