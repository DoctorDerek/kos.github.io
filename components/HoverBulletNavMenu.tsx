import { useCurrentPath } from "@/lib/utils"
import { HomeIcon, BriefcaseIcon } from "@heroicons/react/outline"
import HoverBullet from "@/components/HoverBullet"
import NAVIGATION_MENU from "@/data/NAVIGATION_MENU"

// confirm that NAVIGATION_MENU data is as expected
if (NAVIGATION_MENU[1][1][0][0] !== "Residential") {
  throw new Error(
    "BulletNavMenu was expecting `Residential` in NAVIGATION_MENU"
  )
}
const bulletsResidential = NAVIGATION_MENU[1][1][0][1] as NAVIGATION_MENU_TYPE[]
if (NAVIGATION_MENU[1][1][1][0] !== "Business") {
  throw new Error("BulletNavMenu was expecting `Business` in NAVIGATION_MENU")
}
const bulletsBusiness = NAVIGATION_MENU[1][1][1][1] as NAVIGATION_MENU_TYPE[]
const bullets = { Business: bulletsBusiness, Residential: bulletsResidential }

function HoverBulletNavItem({ item }: { item: NAVIGATION_MENU_TYPE }) {
  const [title, href] = item as NAVIGATION_MENU_TYPE
  const isCurrentPage = true
  console.log(href, useCurrentPath(), isCurrentPage)
  const CUSTOM_ICONS = {
    residential: <HomeIcon aria-hidden="true" />,
    business: <BriefcaseIcon aria-hidden="true" />,
  }
  const titleIncludes = (keyword: string) =>
    new RegExp(keyword, "i").exec(title as string)
  const customIcon = titleIncludes("residential")
    ? CUSTOM_ICONS["residential"]
    : titleIncludes("business")
    ? CUSTOM_ICONS["business"]
    : null

  return (
    <HoverBullet
      isCurrentPage={useCurrentPath().includes(href as string)}
      text={title as string}
      href={href as string}
      customIcon={customIcon}
      responsive={false}
    />
  )
}
export function HoverBulletNavMenu({
  type = "Residential",
}: {
  type: "Residential" | "Business"
}): JSX.Element {
  return (
    <div className="flex flex-col pt-4 md:space-x-16 md:flex-row md:pt-0">
      <ul key="Left Column">
        {bullets[type].slice(0, 3).map((item) => (
          <HoverBulletNavItem item={item} key={Math.random()} />
        ))}
      </ul>
      <ul key="Right Column">
        {bullets[type].slice(4, 7).map((item) => (
          <HoverBulletNavItem item={item} key={Math.random()} />
        ))}
      </ul>
    </div>
  )
}
