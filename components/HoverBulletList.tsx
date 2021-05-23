import { Fragment } from "react"
import HoverBullet from "@/components/HoverBullet"
export default function HoverBulletList({
  hoverBulletStrings = null,
  hoverBulletNavMenu = null,
}: {
  hoverBulletStrings?: string[] | null
  hoverBulletNavMenu?: NAVIGATION_MENU_TYPE[] | null
}) {
  if (
    !(hoverBulletStrings || hoverBulletNavMenu) ||
    (hoverBulletStrings && hoverBulletNavMenu)
  )
    throw new Error(
      "<HoverBulletList> needs one of either hoverBulletStrings or hoverBulletNavMenu props, but not both"
    )
  return (
    <ul className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl">
      {hoverBulletStrings &&
        hoverBulletStrings.map((text: string) => (
          <Fragment key={text}>
            <HoverBullet text={text} />
          </Fragment>
        ))}
      {hoverBulletNavMenu &&
        hoverBulletNavMenu.map((text: string) => (
          <Fragment key={text}>
            <HoverBullet text={text} />
          </Fragment>
        ))}
    </ul>
  )
}
