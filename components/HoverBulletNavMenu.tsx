import HoverBulletList from "@/components/HoverBulletList"
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

export default function HoverBulletNavMenu({
  type,
}: {
  type: "Residential" | "Business"
}): JSX.Element {
  return (
    <div className="flex flex-col pt-4 md:space-x-16 md:flex-row md:pt-0">
      <HoverBulletList
        hoverBulletAsNavMenuItems={bullets[type].slice(0, 3)}
        key={Math.random()}
        responsive={true}
      />
      <HoverBulletList
        hoverBulletAsNavMenuItems={bullets[type].slice(4, 7)}
        key={Math.random()}
        responsive={true}
      />
    </div>
  )
}
