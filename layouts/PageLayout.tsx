import { ContactFormSection } from "@/components/ContactFormSection"
import Image from "@/components/CustomImage"
import HoverBulletNavMenuAndGetConnectedButton from "@/components/HoverBulletNavMenuAndGetConnectedButton"
import IconColumnSection from "@/components/IconColumnSection"
import LeftColumnMenu from "@/components/LeftColumnMenu"
import OurTeamSection from "@/components/OurTeamSection"
import PricingPackagesBlueSection from "@/components/PricingPackagesBlueSection"
import PricingPackagesSection from "@/components/PricingPackagesSection"
import PricingPackagesSectionFootnotesAndDetails from "@/components/PricingPackagesSectionFootnotesAndDetails"
import { PageSeo } from "@/components/SEO"
import TitleHeadingsAndChildren from "@/components/TitleHeadingsAndChildren"
import siteMetadata from "@/data/siteMetadata.json"

export default function PageLayout({
  slug,
  title,
  headings,
  centerTitle,
  centerHeadings,
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
  leftColumnMenuTitle,
  leftColumnMenuLinks,
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
        <LeftColumnMenu
          leftColumnMenuTitle={leftColumnMenuTitle}
          leftColumnMenuLinks={leftColumnMenuLinks}
        >
          <TitleHeadingsAndChildren
            {...{
              title,
              headings,
              centerTitle,
              centerHeadings,
              fullWidth,
              showAvailabilityTool,
              featuredImage,
              children,
            }}
          />
        </LeftColumnMenu>
        <PricingPackagesSection
          pricingPackages={pricingPackages}
          title={title} // pass in the page title to pass to <OrderNowButton>
        />
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
