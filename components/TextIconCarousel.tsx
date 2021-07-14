import ImageFixed from "next/image"

import IconBadge from "@/components/IconBadge"

export default function TextIconCarousel() {
  const iconBadges: IconBadge[] = [
    {
      icon: "user-circle",
      label: "Excellent Customer Service",
      text: "Contact our friendly, local and knowledgeable staff today",
    },
    {
      icon: "truck",
      label: "Quick, Easy Installations",
      text: "Switch to KOS for worry-free connectivity",
    },
    {
      icon: "menu",
      label: "We Offer More Options",
      text: "Cable, DSL, Wireless Broadband, Hosting, E-mail, VoIP services and more!",
    },
    {
      icon: "shopping-cart",
      label: "Customized Packages",
      text: "Choose the right internet package with the data that you need",
    },
    {
      icon: "clock",
      label: "Pay Only For the Speed You Need",
      text: "Let us help you choose the service that’s best for you",
    },
    {
      icon: "location-marker",
      label: "Locally Owned and Operated",
      text: "KOS has supported Eastern Ontario communities since 1993",
    },
  ]
  return (
    <div className="block-class bottom-sm-margin">
      <div className="container mx-auto">
        <h2 className="text-center decor flex-growor">
          Why choose us?
          <div className="block mx-auto">
            <ImageFixed
              src="/images/h-decor.png"
              height="4px"
              width="64px"
              alt="Decoration"
            />
          </div>
        </h2>
        <div className="flex flex-wrap text-icon-carousel step-animation-container">
          {iconBadges.map((badge) => (
            <IconBadge key={String(badge.label)} {...badge} />
          ))}
        </div>
      </div>
    </div>
  )
}
