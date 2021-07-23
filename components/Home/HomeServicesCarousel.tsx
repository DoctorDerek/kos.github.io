import IconBadge from "@/components/Hover/IconBadge"

const iconBadgesData: IconBadge[] = [
  {
    icon: "home",
    label: ["Residential", "Services"],
    text: "Stay connected with family",
    href: "/residential-services",
    size: "large",
    uppercase: true,
    color: "gray",
  },
  {
    icon: "briefcase",
    label: ["Business", "Services"],
    text: "Keep your business connected",
    href: "/business-services",
    size: "large",
    uppercase: true,
    color: "gray",
  },
]
export default function HomeServicesCarousel() {
  const iconBadges = iconBadgesData
  return (
    <div className="mx-auto my-20">
      <div className="flex flex-wrap justify-evenly">
        {iconBadges.map((iconBadge: IconBadge) => (
          <IconBadge key={String(iconBadge.label)} {...iconBadge} />
        ))}
      </div>
    </div>
  )
}
