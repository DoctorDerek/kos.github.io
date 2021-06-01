import Link from "@/components/Link"
import RightArrow from "@/data/material-icons/keyboard_arrow_right_black_48dp.svg"
import NAVIGATION_MENU from "@/data/NAVIGATION_MENU"
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

const BULLET = () => (
  <div className="inline-block w-3 h-3 text-blue-800 border-current border-solid rounded-full fill-current border-[1px] mx-4">
    <RightArrow />
  </div>
)
const formatBullets = (item: any) => {
  const [title, href] = item as NAVIGATION_MENU_TYPE
  return (
    <li key={(title as string) + "BulletNavMenu"}>
      <BULLET />
      <Link href={href as string}>{title}</Link>
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
      <ul key="Left Column">{bullets[type].slice(0, 3).map(formatBullets)}</ul>
      <ul key="Right Column">{bullets[type].slice(4, 7).map(formatBullets)}</ul>
    </div>
  )
}
