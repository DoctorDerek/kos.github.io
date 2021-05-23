import { useState } from "react"
import { useCurrentPath, classNames } from "@/lib/utils"
import { HomeIcon, BriefcaseIcon } from "@heroicons/react/outline"
import { BULLET } from "@/components/UTILS"
import NAVIGATION_MENU from "@/data/NAVIGATION_MENU"
import Link from "@/components/Link"

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

function BulletNavBullet({ item }: { item: NAVIGATION_MENU_TYPE }) {
  const [title, href] = item as NAVIGATION_MENU_TYPE
  const isCurrentPage = href === useCurrentPath()
  const [hover, setHover] = useState(false)
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
    <li
      key={(title as string) + "BulletNavMenu"}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <BULLET hover={hover || isCurrentPage} customIcon={customIcon} />
      <Link
        href={href as string}
        className={classNames(
          hover || isCurrentPage ? "underline" : "no-underline"
        )}
      >
        {title}
      </Link>
    </li>
  )
}
export function BulletNavMenu({
  type = "Residential",
}: {
  type: "Residential" | "Business"
}): JSX.Element {
  return (
    <div className="flex flex-col pt-4 md:space-x-16 md:flex-row md:pt-0">
      <ul key="Left Column">
        {bullets[type].slice(0, 3).map((item) => (
          <BulletNavBullet item={item} key={Math.random()} />
        ))}
      </ul>
      <ul key="Right Column">
        {bullets[type].slice(4, 7).map((item) => (
          <BulletNavBullet item={item} key={Math.random()} />
        ))}
      </ul>
    </div>
  )
}
