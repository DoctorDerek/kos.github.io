import { PageSeo } from "@/components/SEO"
import siteMetadata from "@/data/siteMetadata.json"
import { Fragment } from "react"
import Image from "@/components/CustomImage"
import ImageFixed from "next/image"
import Link from "@/components/CustomLink"
import { BUTTON, DIVIDER } from "@/components/UTILS"
import { classNames, addLinkToTextIfPresent } from "@/lib/utils"
import PostalCodeCheckForm from "@/components/PostalCodeCheckForm"
import HoverBulletNavMenu from "@/components/HoverBulletNavMenu"
import PricingPackagesSection from "@/components/PricingPackagesSection"
import PricingPackagesSectionFootnotesAndDetails from "@/components/PricingPackagesSectionFootnotesAndDetails"
import IconColumnSection from "@/components/IconColumnSection"
import OurTeamSection from "@/components/OurTeamSection"
import PricingPackagesBlueSection from "@/components/PricingPackagesBlueSection"

export default function HoverBulletNavMenuAndGetConnectedButton({
  hoverBulletNavMenu,
  showGetConnectedButton,
}: {
  hoverBulletNavMenu?: "Business" | "Residential"
  showGetConnectedButton?: boolean
}) {
  if (!(hoverBulletNavMenu || showGetConnectedButton)) return null
  return (
    <div className="max-w-xl mx-auto">
      <DIVIDER />
      {hoverBulletNavMenu && (
        <>
          <div className="pb-4 text-2xl font-semibold tracking-tight color">
            Please{" "}
            <Link href="/contact" className="text-black">
              contact our office
            </Link>{" "}
            for more information, or select from one of our services below.
          </div>
          <HoverBulletNavMenu type={hoverBulletNavMenu} />
        </>
      )}
      {showGetConnectedButton && (
        <div className="py-6">
          <BUTTON href="/order/" text="Get connected" />
        </div>
      )}
    </div>
  )
}
