import { InternalTemplate } from "@/layouts/InternalTemplate"
import HoverBulletNavMenu from "@/components/HoverBulletNavMenu"
import PricingSection, {
  PricingSectionFootnotes,
  HeadingH2AndPostalCodeCheck,
  pricingPackages,
  pricingPackageSectionFootnotes,
} from "@/components/PricingPackagesSection"

export default function ResidentialHighSpeedCable(): JSX.Element {
  const title = (
    <>
      Residential <span className="text-red-brand">High Speed Cable</span>{" "}
      Packages in Kingston & Belleville, Ontario
    </>
  )
  // "Residential High Speed Cable Packages"
  const slug = "home-internet-in-kingston-ontario/high-speed-cable"
  // "res/high-speed-cable"

  return (
    <InternalTemplate
      title={title}
      slug={slug}
      hoverBulletNavMenu={<HoverBulletNavMenu type="Residential" />}
      fullWidth={true}
      pricingSection={<PricingSection pricingPackages={pricingPackages} />}
      pricingFootnotesSection={
        <PricingSectionFootnotes
          pricingPackageSectionFootnotes={pricingPackageSectionFootnotes}
        />
      }
    >
      <HeadingH2AndPostalCodeCheck heading="Get an instant connection with Internet over cable at a price that suits your needs." />
    </InternalTemplate>
  )
}
