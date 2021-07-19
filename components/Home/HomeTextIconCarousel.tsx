import IconBadge from "@/components/Hover/IconBadge"
import DIVIDER from "@/components/Utils/DECOR/DIVIDER"

export default function HomeTextIconCarousel() {
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
    <div>
      {" "}
      <h2 className="text-center">
        Why choose us?
        <DIVIDER />
      </h2>
      <div className="flex flex-wrap">
        {iconBadges.map((badge) => (
          <IconBadge key={String(badge.label)} {...badge} />
        ))}
      </div>
    </div>
  )
}
