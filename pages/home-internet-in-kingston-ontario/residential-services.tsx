import { InternalTemplate } from "@/components/InternalTemplate"
import { HoverBulletNavMenu } from "@/components/HoverBulletNavMenu"

export default function ResidentialServices(): JSX.Element {
  const title = (
    <>
      <span className="text-red-brand">Home Internet Service</span> Provider in
      Kingston & Belleville, Ontario
    </>
  )
  // "Residential Services"
  const slug = "home-internet-in-kingston-ontario/residential-services"
  // "residential"
  const bulletNavMenu = <HoverBulletNavMenu type="Residential" />

  return (
    <InternalTemplate
      title={title}
      slug={slug}
      bulletNavMenu={bulletNavMenu}
      showOrderNowButton={true}
    >
      <ResidentialServicesContent />
    </InternalTemplate>
  )
}

function ResidentialServicesContent() {
  return (
    <>
      <p>
        Kingston Online Services offers Internet for the home (or home office)
        at speeds starting from dial-up connectivity to high speed services
        intended for video and telephony.
      </p>
      <p>
        Kingston Online Services also provides innovative solutions for rural
        connectivity where conventional Internet services are not available.
      </p>
    </>
  )
}
