import HoverBulletList from "@/components/Hover/HoverBulletList"
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
  // The heading is the main page, business-services or residential-services
  const headingForNavMenu = bullets[type].slice(0, 1)
  const [title, href] = headingForNavMenu[0] as string[]
  const headingNavMenuItem = [
    [title + " Services in Kingston & Belleville, ON", href],
  ] as NAVIGATION_MENU_TYPE[]

  // calculate where to split the menu items array with .slice()
  const midPointIndex = bullets[type].length / 2 + 1
  const lastItemIndex = bullets[type].length
  return (
    <>
      <h4 className="p-0 mb-4 text-2xl font-bold text-gray-700 font-lato md:mb-5">
        <HoverBulletList
          hoverBulletAsNavMenuItems={headingNavMenuItem}
          responsive={true}
        />
      </h4>
      <div className="flex flex-col pt-4 md:space-x-16 md:flex-row md:pt-0">
        {/* left-hand menu */}
        <HoverBulletList
          hoverBulletAsNavMenuItems={bullets[type].slice(1, midPointIndex)}
          responsive={true}
        />
        {/* right-hand menu */}
        <HoverBulletList
          hoverBulletAsNavMenuItems={bullets[type].slice(
            midPointIndex,
            lastItemIndex
          )}
          responsive={true}
        />
      </div>
    </>
  )
}
