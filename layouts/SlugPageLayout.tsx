import HoverBulletNavMenuAndGetConnectedButton from "@/components/Hover/HoverBulletNavMenuAndGetConnectedButton"
import PricingPackagesBlueSection from "@/components/Pricing/PricingPackagesBlueSection"
import PricingPackagesSection from "@/components/Pricing/PricingPackagesSection"
import PricingPackagesSectionFootnotesAndDetails from "@/components/Pricing/PricingPackagesSectionFootnotesAndDetails"
import IconColumnSection from "@/components/Slug/IconColumnSection"
import LeftColumnMenu from "@/components/Slug/LeftColumnMenu"
import OurTeamSection from "@/components/Slug/OurTeamSection"
import TitleHeadingsAndChildren from "@/components/Slug/TitleHeadingsAndChildren"
import { ContactFormSection } from "@/components/Utils/ContactFormSection"
import Image from "@/components/Utils/CustomImage"
import PageSeo from "@/components/Utils/PageSeo"
import SectionWrapper from "@/components/Utils/SectionWrapper"
import siteMetadata from "@/data/siteMetadata.json"

export default function SlugPageLayout({
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
        url={`${siteMetadata.siteUrl}/${slug ? slug : ""}`}
      />

      <div className="grid w-full xl:h-32 lg:h-28 md:h-24 sm:h-20 h-16 border-blue-brand border-solid border-t-[6px]">
        <Image src="/images/footer-bg.jpg" alt="Decoration" />
        {/* alt="" acceptable for purely decorative elements */}
      </div>

      <SectionWrapper>
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
      </SectionWrapper>
    </>
  )
}
